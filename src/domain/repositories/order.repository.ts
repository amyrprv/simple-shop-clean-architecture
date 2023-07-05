import { Order } from '@domain/entities/order.entity';

export abstract class OrderRepository {
  abstract createOrder(order: Order): Promise<void>;
}
