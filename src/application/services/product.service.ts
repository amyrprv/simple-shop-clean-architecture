import { ProductRepository } from '@domain/repositories/product.repository';
import { Injectable } from '@nestjs/common';
import { ProductNotFoundException } from '@infrastructure/exceptions/product.exceptions';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getProductById(id: number) {
    const product = await this.productRepository.findById(id);

    if (!product) throw new ProductNotFoundException();

    return product;
  }
}
