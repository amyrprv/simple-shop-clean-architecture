import { InjectModel } from '@nestjs/sequelize';
import { OrderEntity } from '@infrastructure/sequelize/entities/order.entity';
import { Order } from '@domain/entities/order.entity';
import { OrderRepository } from '@domain/repositories/order.repository';

export class OrderSQLRepository implements OrderRepository {
  constructor(
    @InjectModel(OrderEntity) private orderModel: typeof OrderEntity,
  ) {}

  createOrder(order: Order): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
