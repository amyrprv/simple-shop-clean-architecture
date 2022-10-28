import { Model, Table, Column } from 'sequelize-typescript';

@Table
export class UserSequelizeEntity extends Model {
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column
  password: string;
}
