import { ExceptionBase } from '@domain/libs/exceptions/exception.base';

export class UnAuthorizedException extends ExceptionBase {
  static readonly message = 'username or password is not match';

  public readonly code = 'AUTH.UNAUTHORIZED';

  public readonly httpCode = 401;

  constructor(metadata?: unknown) {
    super(UnAuthorizedException.message, undefined, metadata);
  }
}
