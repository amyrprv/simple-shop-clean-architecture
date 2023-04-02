import { Product } from '@domain/entities/product.entity';
import { User } from '@domain/entities/user.entity';

export class Order {
  id: number;
  user: User;
  items: OrderItem[];
  totalPrice: number;
  status: OrderStatus;
}

export class OrderItem {
  product: Product;
  quantity: number;
}

export enum OrderStatus {
  CREATED = 'created',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}
