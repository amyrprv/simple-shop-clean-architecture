import { Injectable } from '@nestjs/common';
import { AuthDTO } from '@application/dtos/auth.dto';
import { UserRepository } from '@domain/repositories/user.repository';
import { UsernameAuth } from '@domain/entities/auth.entity';
import { UnAuthorizedException } from '@infrastructure/exceptions/auth.exception';
import { TokenAdapter } from '@infrastructure/adapters/token.adapter';
import { LoginDTO } from '@application/dtos/login.dto';
import { HttpResponse } from '@domain/libs/http-response.base';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenAdapter: TokenAdapter,
  ) {}

  async login(loginDto: LoginDTO): Promise<HttpResponse<AuthDTO>> {
    const user = await this.userRepository.findByUsername(loginDto.username);

    if (!user) throw new UnAuthorizedException();

    const authObject: UsernameAuth = new UsernameAuth(
      loginDto.username,
      loginDto.password,
    );

    const isPasswordMatched = await authObject.comparePassword(user.password);

    if (!isPasswordMatched) throw new UnAuthorizedException();

    const accessToken = this.tokenAdapter.generateToken(authObject.username);

    return {
      status: 200,
      message: '',
      data: {
        accessToken,
        tokenType: 'Bearer',
      },
    };
  }
}
