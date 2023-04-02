import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { OrderEntity } from "@infrastructure/sequelize/entities/order.entity";
import { ProductEntity } from "@infrastructure/sequelize/entities/product.entity";

@Table({ tableName: 'OrderItem' })
export class OrderItemEntity extends Model {
  @Column
  quantity: number;

  @ForeignKey(() => OrderEntity)
  @Column
  orderId: number;

  @BelongsTo(() => OrderEntity)
  order: OrderEntity;

  @ForeignKey(() => ProductEntity)
  @Column
  productId: number;

  @BelongsTo(() => ProductEntity)
  product: ProductEntity;
}
