import { Router } from 'express';

import { getPlayers, addPlayer, getPlayer, editPlayer, softDeletePlayer } from './controller';

function registerPlayerRoutes(): Router {
  const router = Router();

  router.get('/', getPlayers);
  router.post('/', addPlayer);
  router.get('/:id', getPlayer);
  router.patch('/:id', editPlayer);
  router.delete('/:id', softDeletePlayer);

  return router;
}

export default registerPlayerRoutes;
