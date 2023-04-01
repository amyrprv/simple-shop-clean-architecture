import { ProductRepository } from '@domain/repositories/product.repository';
import { Injectable } from '@nestjs/common';
import { ProductNotFoundException } from '@infrastructure/exceptions/product.exceptions';
import { ProductDTO } from '@application/dtos/product.dto';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getProductById(id: number): Promise<ProductDTO> {
    const product = await this.productRepository.findById(id);

    if (!product) throw new ProductNotFoundException();

    return new ProductDTO(product.id, product.name, product.price);
  }

  async getAllProducts(): Promise<ProductDTO[]> {
    const products = await this.productRepository.find();

    return products.map((v) => new ProductDTO(v.id, v.name, v.price));
  }
}
