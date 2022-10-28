import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserDomain } from '../domain/user.domain';
import { UserRepositoryPort } from '../ports/user.repository.port';

@Injectable()
export class UserService {
  constructor(private readonly userRepositoryPort: UserRepositoryPort) {}

  async createUser(user: UserDomain) {
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);

    this.userRepositoryPort.insert(user);
  }
}
