import { ProductRepository } from '@domain/repositories/product.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  getProductById(id: number) {
    return this.productRepository.findById(id);
  }
}
