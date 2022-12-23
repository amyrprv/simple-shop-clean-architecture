import { RepositoryFindOptions } from '../../../../common/persistence/repository-options.common';
import { Optional } from '../../../../../core/common/type/types.common';
import { User } from '../../entity/user.entity';

export abstract class UserRepositoryPort {
  abstract findUser(
    by: { id?: string; email?: string },
    options?: RepositoryFindOptions,
  ): Promise<Optional<User>>;

  abstract addUser(user: User): Promise<void>;
}
