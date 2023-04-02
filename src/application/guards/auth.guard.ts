import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenAdapter } from '@infrastructure/adapters/token.adapter';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly tokenAdapter: TokenAdapter) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authToken = request.headers.authorization;

    if (!authToken || !authToken.startsWith('Bearer ')) return false;

    const tokenValue = authToken.slice(7);

    const isValid = this.tokenAdapter.verifyToken(tokenValue);

    return !!isValid;
  }
}
