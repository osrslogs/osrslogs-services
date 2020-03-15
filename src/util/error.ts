/* eslint-disable max-classes-per-file */

export class HttpError extends Error {
  readonly status: number;

  constructor(msg: string, status = 500) {
    super(msg);

    this.status = status;
  }
}

export class NotFoundError extends HttpError {
  constructor(msg: string) {
    super(msg, 404);
  }
}

export class BadRequestError extends HttpError {
  constructor(msg: string) {
    super(msg, 400);
  }
}

export class UnauthenticatedError extends HttpError {
  constructor(msg: string) {
    super(msg, 401);
  }
}

export class ForbiddenError extends HttpError {
  constructor(msg: string) {
    super(msg, 403);
  }
}

export class MethodNotImplementedError extends HttpError {
  constructor(msg: string) {
    super(msg, 405);
  }
}
