import { Express } from 'express';

import registerApiRoutes from './components';

function initRestRoutes(app: Express): void {
  const prefix = '/v1';

  // registerMiddleware(app);
  registerApiRoutes(app, prefix);
  // registerErrorHandler(app);
}

export default initRestRoutes;
