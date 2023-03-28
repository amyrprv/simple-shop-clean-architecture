import { Product } from "../entities/product.entity";

export abstract class ProductRepository {
    abstract findById(id:number): Promise<Product>;
}