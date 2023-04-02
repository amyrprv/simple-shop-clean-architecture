import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { OrderEntity } from '@infrastructure/sequelize/entities/order.entity';

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

  @HasMany(() => OrderEntity)
  orders: OrderEntity[];
}
