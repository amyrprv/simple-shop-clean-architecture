import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDomain } from '../core/domain/user.domain';
import { UserMapper } from '../user.mapper';
import { UserSequelizeEntity } from './user-sequelize.entity';
import { UserRepositoryPort } from '../core/ports/user.repository.port';

@Injectable()
export class UserSequelizeRepository implements UserRepositoryPort {
  constructor(
    @InjectModel(UserSequelizeEntity)
    private userEntity: typeof UserSequelizeEntity,
    private mapper: UserMapper,
  ) {}

  async findOneByFilter(filter: Partial<UserDomain>): Promise<UserDomain> {
    const entity = await this.userEntity.findOne({ where: filter });
    return this.mapper.toDomain(entity);
  }

  async insert(domain: UserDomain): Promise<void> {
    const entity = new UserSequelizeEntity({ ...domain });
    await entity.save();
  }
  async findAll(): Promise<UserDomain[]> {
    const entity = await this.userEntity.findAll();
    return this.mapper.toDomain(entity);
  }
  findOneById(id: string): Promise<UserDomain> {
    throw new Error('Method not implemented.');
  }
  delete(entity: UserDomain): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
