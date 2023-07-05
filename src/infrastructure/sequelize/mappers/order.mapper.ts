import { Order } from "@domain/entities/order.entity";
import { Mapper } from "@domain/libs/mapper.base";
import { OrderEntity } from "@infrastructure/sequelize/entities/order.entity";

export class OrderMapper implements Mapper<Order,OrderEntity>{
    toDomain(entity: OrderEntity): Order {
        throw new Error("Method not implemented.");
    }
    toPersistence(domain: Order): OrderEntity {
        throw new Error("Method not implemented.");
    }

}