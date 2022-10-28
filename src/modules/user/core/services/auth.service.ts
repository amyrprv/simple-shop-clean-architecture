import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../ports/user.repository.port';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userRepositoryPort: UserRepositoryPort) {}

  async loginWithEmailAndPassword(email: string, password: string): Promise<boolean> {
    const user = await this.userRepositoryPort.findOneByFilter({ email });

    return await bcrypt.compare(password, user.password);
  }
}
