import { Mapper } from '@domain/libs/mapper.base';
import { User } from '@domain/entities/user.entity';
import { UserEntity } from '@infrastructure/sequelize/entities/user.entity';

export class UserMapper implements Mapper<User, UserEntity> {
  toDomain(entity: UserEntity): User {
    if (entity) {
      const user = new User();

      user.id = entity.id;
      user.username = entity.username;
      user.firstName = entity.firstName;
      user.lastName = entity.lastName;
      user.password = entity.password;

      return user;
    }
  }
  toPersistence(domain: User): UserEntity {
    throw new Error('Method not implemented.');
  }
}
