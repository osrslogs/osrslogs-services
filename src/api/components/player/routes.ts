import { Router } from 'express';

import { getPlayers, addPlayer, getPlayer, editPlayer, deletePlayer } from './controller';

function registerPlayerRoutes(): Router {
  const router = Router();

  router.get('/', getPlayers);
  router.post('/', addPlayer);
  router.get('/:id', getPlayer);
  router.patch('/:id', editPlayer);
  router.delete('/:id', deletePlayer);

  return router;
}

export default registerPlayerRoutes;
