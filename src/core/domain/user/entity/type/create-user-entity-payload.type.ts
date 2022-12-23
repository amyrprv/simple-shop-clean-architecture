import { UserRole } from '@core/common/enums/user-role.enum';

export type CreateUserEntityPayload = {
  firstName: string,
  lastName: string,
  email: string,
  role: UserRole,
  password: string
  id?: string,
  createdAt?: Date,
  editedAt?: Date,
  removedAt?: Date,
};
