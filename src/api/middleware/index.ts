import { Express, json } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import etag from 'etag';

import errorHandler from '../../util/error-handler';
import accessEnv from '../../util/access-env';

export function registerMiddleware(app: Express): void {
  app.use(helmet());
  app.use(compression());
  app.use(json());

  if (accessEnv('NODE_ENV') === 'development') {
    app.use(cors({ origin: '*' }));
  } else {
    app.use(cors({ origin: ['https://*.osrslogs.com'] }));
  }

  app.set('etag', (body: Buffer) => etag(body));

  /**
   * TODO:
   * - cors (whitelist only *.osrslogs.com)
   * - helmet
   * - content type filter on post/patch requests
   * - logg origin of all requests
   */
}

export function registerErrorHandler(app: Express): void {
  app.use(errorHandler());
}
