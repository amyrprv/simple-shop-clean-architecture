import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from '@application/services/product.service';

@ApiTags('Product')
@Controller('/api/v1/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/:id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getProductById(id);
  }

  @Get('/')
  getAllProdcut() {
    return this.productService.getAllProducts();
  }
}
