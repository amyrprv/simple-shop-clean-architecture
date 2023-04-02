import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { OrderItemEntity } from '@infrastructure/sequelize/entities/order-item.entity';

@Table({ tableName: 'Product' })
export class ProductEntity extends Model {
  @Column
  name: string;

  @Column
  price: number;

  @Column
  description: string;

  @HasMany(() => OrderItemEntity)
  orderItems: OrderItemEntity[];
}
