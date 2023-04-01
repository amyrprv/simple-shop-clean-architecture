import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserRepository } from '@domain/repositories/user.repository';
import { User } from '@domain/entities/user.entity';
import { UserEntity } from '@infrastructure/sequelize/entities/user.entity';
import { UserMapper } from '@infrastructure/sequelize/mappers/user.mapper';

@Injectable()
export class UserSQLRepository implements UserRepository {
  private mapper: UserMapper;

  constructor(@InjectModel(UserEntity) private userModel: typeof UserEntity) {
    this.mapper = new UserMapper();
  }

  async findByUsername(username: string): Promise<User> {
    const entity = await this.userModel.findOne({
      where: {
        username,
      },
    });

    return this.mapper.toDomain(entity);
  }
}
