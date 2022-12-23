import { Model, Table, Column } from 'sequelize-typescript';
import { UserRole } from '@core/common/enums/user-role.enum';

@Table({ tableName: 'User' })
export class OrmUser extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  passwordHash: string;

  @Column
  email: string;

  @Column
  role: UserRole;
}
