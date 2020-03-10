import { Response, Request } from 'express';

export async function getPlayer(req: Request, res: Response): Promise<void> {
  console.info('getPlayer');
  res.send('getPlayer');
}

export async function getPlayers(req: Request, res: Response): Promise<void> {
  console.info('getPlayers');
  res.send('getPlayers');
}

export async function editPlayer(req: Request, res: Response): Promise<void> {
  console.info('editPlayer');
  res.send('editPlayer');
}

export async function addPlayer(req: Request, res: Response): Promise<void> {
  console.info('addPlayer');
  res.send('addPlayer');
}

export async function deletePlayer(req: Request, res: Response): Promise<void> {
  console.info('deletePlayer');
  res.send('deletePlayer');
}
