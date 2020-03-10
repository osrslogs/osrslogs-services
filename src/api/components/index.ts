import { Express } from 'express';

import registerPlayerRoutes from './player/routes';

function registerApiRoutes(app: Express, prefix = ''): void {
  app.use(`${prefix}/players`, registerPlayerRoutes());
}

export default registerApiRoutes;
