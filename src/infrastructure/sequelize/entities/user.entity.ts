import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'User' })
export class UserEntity extends Model {
  @Column
  username: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  password: string;
}
