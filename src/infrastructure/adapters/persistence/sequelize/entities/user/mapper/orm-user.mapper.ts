import { User } from '@core/domain/user/entity/user.entity';
import { OrmUser } from '../orm-user.entity';

export class OrmUserMapper {
  public static toOrmEntity(domainUser: User): OrmUser {
    const ormUser: OrmUser = new OrmUser();

    ormUser.id = domainUser.getId();
    ormUser.firstName = domainUser.firstName;
    ormUser.lastName = domainUser.lastName;
    ormUser.email = domainUser.email;
    ormUser.role = domainUser.role;

    return ormUser;
  }

  public static toDomainEntity(ormUser: OrmUser): User {
    const domainUser: User = new User({
      id: ormUser.id,
      email: ormUser.email,
      firstName: ormUser.firstName,
      lastName: ormUser.lastName,
      password: ormUser.passwordHash,
      role: ormUser.role,
    });

    return domainUser;
  }
}
