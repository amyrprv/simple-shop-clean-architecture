import { Module } from '@nestjs/common';
import { ProductRepository } from '@domain/repositories/product.repository';
import { ProductSQLRepository } from '@infrastructure/sequelize/repositories/product.sql.repository';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    { provide: ProductRepository, useExisting: ProductSQLRepository },
  ],
})
export class ApplicationModule {}
