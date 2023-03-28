import { Mapper } from '@domain/base/mapper.base';
import { Product } from '@domain/entities/product.entity';
import { ProductEntity } from '@infrastructure/sequelize/entities/product.entity';

export class ProductMapper implements Mapper<Product, ProductEntity> {
  toDomain(entity: ProductEntity): Product {
    if (entity) {
      const product = new Product();

      product.id = entity.id;
      product.name = entity.name;
      product.description = entity.description;
      product.price = entity.price;

      return product;
    }
  }
  toPersistence(domain: Product): ProductEntity {
    const entity = new ProductEntity();

    entity.id = domain.id;
    entity.name = domain.name;
    entity.description = domain.description;
    entity.price = domain.price;

    return entity;
  }
}
