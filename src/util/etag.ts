import { Request } from 'express';

import { HttpError } from './error';

/**
 * Checks if an ETag is valid. Throws errors if it is missing or invalid.
 *
 * @param {Request} req The request that demands etag validation
 * @param {string} expected The expected ETag
 *
 * @returns {true}
 *
 * @throws {HttpError} If ETag is missing or invalid
 */
function isValidEtag(req: Request, expected: string): true {
  const etag = req.header('if-match');
  if (!etag) {
    throw new HttpError('Missing required header: If-Match', 403);
  }

  if (etag !== expected) {
    throw new HttpError('Invalid ETag', 412);
  }

  return true;
}

export default isValidEtag;
