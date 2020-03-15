import { Response, Request, NextFunction } from 'express';
import { FindOptions, CreateOptions, DestroyOptions, UpdateOptions } from 'sequelize';
import { PlayerMode } from 'osrs-hiscores/lib/types';
import etag from 'etag';

import hiscores from '../../../services/hiscores';
import Player from './model';
import { create, find, findAll, destroy, update } from './service';
import isValidEtag from '../../../util/etag';

/**
 * Validates the ETag on requests attempting to modify/delete a Player
 *
 * @param {Request} req
 * @param {id} id The player id
 *
 * @throws {NotFoundError} If the player is not found
 * @throws {HttpError} If the ETag is invalid
 */
async function validateEtag(req: Request, id: number): Promise<void> {
  const player: Player = await find(id);
  const expectedEtag = etag(JSON.stringify(player));
  isValidEtag(req, expectedEtag);
}

/**
 * Finds a single player based on the id.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Response} The player if found
 */
export async function getPlayer(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  // TODO: Add ability to extend with other objects (datapoints / groups / comps)
  try {
    const { id } = req.params;

    const player: Player = await find(Number(id)); // TODO: do properly

    return res.json(player);
  } catch (err) {
    return next(err);
  }
}

/**
 * Finds all players based on the given criteria.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Response | void} A list of all players matching criteria. Empty list if none found.
 */
export async function getPlayers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  // TODO: Add ability to filter/sort
  try {
    const options: FindOptions = {};

    const players: Player[] = await findAll(options);

    return res.json(players);
  } catch (err) {
    return next(err);
  }
}

/**
 * Handles editing a players attributes indirectly. Accepts commands to perform
 * to get the updated data from Old School RuneScape hiscores.
 *
 * Performs actions related to:
 * - name change
 * - display name
 * - update game mode
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Response | void}
 */
export async function editPlayer(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const { id } = req.params;

    await validateEtag(req, Number(id));

    const values: object = {};
    const options: UpdateOptions = {
      where: {
        id,
      },
    };

    const updatedPlayer: Player = await update(values, options);

    return res.json(updatedPlayer);
  } catch (err) {
    return next(err);
  }
}

/**
 * Adds a new player to the database with correct game mode set and an initial
 * datapoint from the time of creation. Players are unique by name.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Response | void} The newly created player object if successful
 */
export async function addPlayer(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const { name } = req.body;

    const playerMode: PlayerMode = await hiscores.getMode(name);

    const value: object = {
      name,
      mode: playerMode.mode,
      status: 'active', // TODO: change to enum instead for consistency?
    };
    const options: CreateOptions = {};

    const player: Player = await create(value, options);

    /**
     * TODO: Create initial datapoint
     * const stats: Stats = await hiscores.getStats(name, playerMode.mode);
     * await createDatapoint(stats, options);
     */

    return res.json(player);
  } catch (err) {
    return next(err);
  }
}

/**
 * Soft deletes a player from the database. This action is safe and can be recovered. By default
 * all deletions are soft deletes for safety and backup purposes. {@see hardDeletePlayer} for
 * removing a player permanently.
 *
 * Requires (admin) authorization
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Response | void}
 */
export async function softDeletePlayer(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  // TODO:
  // - look into return content
  // - Require auth
  // - should be a transaction?
  try {
    const { id } = req.params;

    await validateEtag(req, Number(id));

    const options: DestroyOptions = {
      where: {
        id,
      },
    };

    const deleted: boolean = await destroy(options);

    return res.json({ success: deleted });
  } catch (err) {
    return next(err);
  }
}

/**
 * Hard deletes a player from the database. This action is unsafe and can _not_ be recovered.
 * {@see softDeletePlayer} for removing a player safely.
 *
 * Requires (admin) authorization
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Response | void}
 */
export async function hardDeletePlayer(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  // TODO
  // - look into return content
  // - Require: auth
  try {
    const { id } = req.params;

    await validateEtag(req, Number(id));

    const options: DestroyOptions = {
      where: {
        id,
      },
      force: true,
    };

    const deleted: boolean = await destroy(options);

    return res.json({ success: deleted });
  } catch (err) {
    return next(err);
  }
}
