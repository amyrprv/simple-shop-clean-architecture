import { Module, Provider } from '@nestjs/common';
import { ProductRepository } from '@domain/repositories/product.repository';
import { UserRepository } from '@domain/repositories/user.repository';
import { ProductController } from '@application/controllers/product.controller';
import { ProductService } from '@application/services/product.service';
import { AuthService } from '@application/services/username-auth.service';
import { AuthController } from '@application/controllers/auth.controller';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';
import { TokenAdapter } from '@infrastructure/adapters/token.adapter';
import { ProductSQLRepository } from '@infrastructure/sequelize/repositories/product.sql.repository';
import { UserSQLRepository } from '@infrastructure/sequelize/repositories/user.sql.repository';

const services: Provider[] = [ProductService, AuthService, TokenAdapter];
const repositories: Provider[] = [
  { provide: ProductRepository, useExisting: ProductSQLRepository },
  { provide: UserRepository, useExisting: UserSQLRepository },
];

@Module({
  imports: [InfrastructureModule],
  controllers: [ProductController, AuthController],
  providers: [...services, ...repositories],
})
export class ApplicationModule {}
