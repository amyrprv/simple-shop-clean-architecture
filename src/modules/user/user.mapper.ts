import { Injectable } from '@nestjs/common';
import { Mapper } from '../../libs/base-classes/mapper.base';
import { UserSequelizeEntity } from './database/user-sequelize.entity';
import { UserDomain } from './domain/user.domain';

@Injectable()
export class UserMapper implements Mapper<UserDomain, UserSequelizeEntity> {
  toDomain(data: any): UserDomain {
    if (data)
      return {
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      };
  }
  toPersistence(domain: UserDomain): UserSequelizeEntity {
    if (domain) {
      const options: Partial<UserSequelizeEntity> = {
        firstName: domain.firstName,
        lastName: domain.lastName,
        password: domain.password,
      };

      return new UserSequelizeEntity(options);
    }
  }
}
