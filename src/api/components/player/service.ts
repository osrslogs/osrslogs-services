import { FindOptions, CreateOptions, DestroyOptions, RestoreOptions, UpdateOptions, EmptyResultError } from 'sequelize';

import Player from './model';
import { NotFoundError } from '../../../util/error';

/**
 * Finds a player by primary key (id).
 *
 * @param {number} id The player id
 *
 * @returns {Player}
 */
export async function find(id: number): Promise<Player> {
  try {
    const player: Player = await Player.findByPk(id, { rejectOnEmpty: true });
    return player;
  } catch (err) {
    // Want all non-500 errors to be instance of HTTPError
    if (err instanceof EmptyResultError) {
      throw new NotFoundError('Player not found');
    }
    throw err;
  }
}

/**
 * Find all players of a given criteria
 *
 * @param {FindOptions} options The filter and sorting criteria for the search
 *
 * @returns {Player[]}
 */
export async function findAll(options: FindOptions): Promise<Player[]> {
  const players: Player[] = await Player.findAll(options);
  return players;
}

/**
 * Inserts a new player row in the database
 *
 * @param {object} values The values of the player
 * @param {CreateOptions} options
 *
 * @returns {Player} The newly inserted player object
 */
export async function create(values: object, options: CreateOptions): Promise<Player> {
  const player: Player = await Player.create(values, options);
  return player;
}

/**
 * Updates values of a player
 *
 * @param {object} values
 * @param {UpdateOptions} options
 *
 * @returns {Player} The newly modified player object
 */
export async function update(values: object, options: UpdateOptions): Promise<Player> {
  const player: Player = await Player.update(values, options);
  return player;
}

/**
 * Removes a player from the database (soft or hard depends on the options)
 *
 * @param {DestroyOptions} options The options determining which player(s) and grade of deletion
 *
 * @returns {boolean}
 */
export async function destroy(options: DestroyOptions): Promise<boolean> {
  const success: number = await Player.destroy(options);
  return !!success;
}

/**
 * Restores a player whom have been soft deleted
 *
 * @param {RestoreOptions} options
 *
 * @returns {Player} The newly restored player object
 */
export async function restore(options: RestoreOptions): Promise<Player> {
  const player: Player = await Player.restore(options);
  return player;
}
