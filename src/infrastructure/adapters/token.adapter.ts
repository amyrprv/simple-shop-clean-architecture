import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenAdapter {
  constructor(private jwtService: JwtService) {}

  generateToken(userId: string): string {
    const payload = { sub: userId };

    return this.jwtService.sign(payload);
  }
  verifyToken(token: string): { sub: string } {
    return this.jwtService.verify(token);
  }
}
