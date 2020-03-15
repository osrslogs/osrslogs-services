import { Response, Request, NextFunction } from 'express';

import { HttpError } from './error';

function errorHandler() {
  // Error functions used in middleware needs to have req, res, next
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (err: HttpError, req: Request, res: Response, next: NextFunction): void => {
    const status = err.status || 500;
    res.status(status);

    const body = {
      title: err.message,
      detail: null,
      timestamp: new Date().toISOString(),
    };

    if (status >= 500) {
      console.info(`Caught fatal error in application: '${err.message}'`);
      // TODO: Ensure unknown 5xx errors are sanitised
      if (status === 500) {
        body.title = 'Something went wrong, and we could not complete your request';
      }
    }

    res.send(body);
  };
}

export default errorHandler;
