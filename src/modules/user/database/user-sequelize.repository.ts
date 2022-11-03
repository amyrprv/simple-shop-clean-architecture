import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../core/models/user.model';
import { UserMapper } from './user.mapper';
import { UserSequelizeEntity } from './user-sequelize.entity';
import { UserRepositoryPort } from '../core/ports/user.repository.port';

@Injectable()
export class UserSequelizeRepository implements UserRepositoryPort {
  constructor(
    @InjectModel(UserSequelizeEntity)
    private userEntity: typeof UserSequelizeEntity,
    private mapper: UserMapper,
  ) {}

  async findOneByFilter(filter: Partial<UserModel>): Promise<UserModel> {
    const entity = await this.userEntity.findOne({ where: filter });
    return this.mapper.toModel(entity);
  }

  async insert(domain: UserModel): Promise<void> {
    const entity = new UserSequelizeEntity({ ...domain });
    await entity.save();
  }
  async findAll(): Promise<UserModel[]> {
    const entities = await this.userEntity.findAll();
    return entities.map(this.mapper.toModel)
  }
  findOneById(id: string): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }
  delete(entity: UserModel): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
