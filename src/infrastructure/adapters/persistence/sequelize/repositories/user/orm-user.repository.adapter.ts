import { InjectModel } from '@nestjs/sequelize';
import { RepositoryFindOptions } from '@core/common/persistence/repository-options.common';
import { User } from '@core/domain/user/entity/user.entity';
import { UserRepositoryPort } from '@core/domain/user/port/persistence/user.repository.port';
import { OrmUser } from '../../entities/user/orm-user.entity';
import { OrmUserMapper } from '../../entities/user/mapper/orm-user.mapper';

export class OrmUserRepositoryAdapter implements UserRepositoryPort {
  constructor(@InjectModel(OrmUser) private readonly ormUser: typeof OrmUser) {}

  async findUser(
    by: { id?: string; email?: string },
    options?: RepositoryFindOptions,
  ): Promise<User> {
    const ormEntity = await this.ormUser.findOne({
      where: by,
    });

    return OrmUserMapper.toDomainEntity(ormEntity);
  }

  async addUser(user: User): Promise<void> {
    const ormUser = OrmUserMapper.toOrmEntity(user);

    await ormUser.save();
  }
}
