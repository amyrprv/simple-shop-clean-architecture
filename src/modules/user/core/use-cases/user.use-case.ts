import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserModel } from '../models/user.model';
import { UserRepositoryPort } from '../ports/user.repository.port';

@Injectable()
export class UserService {
  constructor(private readonly userRepositoryPort: UserRepositoryPort) {}

  async createUser(user: UserModel) {
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);

    return this.userRepositoryPort.insert(user);
  }

  async loginUserByEmailPassword(user: UserModel) {
    const currentUser = await this.userRepositoryPort.findOneByFilter({
      email: user.email,
    });

    const passCompare = await bcrypt.compare(
      user.password,
      currentUser.password,
    );

    return passCompare;
  }
}
