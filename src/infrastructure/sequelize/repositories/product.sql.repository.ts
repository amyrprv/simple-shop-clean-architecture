import { InjectModel } from '@nestjs/sequelize';
import { Product } from '@domain/entities/product.entity';
import { ProductRepository } from '@domain/repositories/product.repository';
import { ProductEntity } from '@infrastructure/sequelize/entities/product.entity';
import { ProductMapper } from '@infrastructure/sequelize/mappers/product.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductSQLRepository implements ProductRepository {
  private mapper: ProductMapper;

  constructor(
    @InjectModel(ProductEntity) private productModel: typeof ProductEntity,
  ) {
    this.mapper = new ProductMapper();
  }
ç
  async findById(id: number): Promise<Product> {
    const entity = await this.productModel.findOne({
      where: {
        id,
      },
    });

    return this.mapper.toDomain(entity);
  }
}
