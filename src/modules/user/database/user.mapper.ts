import { Injectable } from '@nestjs/common';
import { Mapper } from '../../../libs/base-classes/mapper.base';
import { UserSequelizeEntity } from './user-sequelize.entity';
import { UserModel } from '../core/models/user.model';

@Injectable()
export class UserMapper implements Mapper<UserModel, UserSequelizeEntity> {
  toModel(data: any): UserModel {
    if (data)
      return {
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        email: data.email,
        mobileNumber: data.mobileNumber
      };
  }
  toPersistence(domain: UserModel): UserSequelizeEntity {
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
