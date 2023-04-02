import {
  Table,
  Model,
  ForeignKey,
  BelongsTo,
  Column,
  HasMany,
} from 'sequelize-typescript';
import { UserEntity } from '@infrastructure/sequelize/entities/user.entity';
import { OrderItemEntity } from '@infrastructure/sequelize/entities/order-item.entity';

@Table({ tableName: 'Order' })
export class OrderEntity extends Model {
  @ForeignKey(() => UserEntity)
  @Column
  userId: number;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @HasMany(() => OrderItemEntity)
  orderItems: OrderItemEntity[];
}
