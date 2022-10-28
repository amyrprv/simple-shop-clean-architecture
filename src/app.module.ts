import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { UserAppModule } from './modules/user/app/user-app.moudle';

@Module({
  imports: [UserAppModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
