import { Express } from 'express';

import registerApiRoutes from './components';
import { registerMiddleware, registerErrorHandler } from './middleware';

function initRestRoutes(app: Express): void {
  const prefix = '/v0';

  registerMiddleware(app);
  registerApiRoutes(app, prefix);
  registerErrorHandler(app);
}

export default initRestRoutes;
