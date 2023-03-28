import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductEntity } from './sequelize/entities/product.entity';
import { ProductSQLRepository } from './sequelize/repositories/product.sql.repository';

@Module({
  imports: [
    SequelizeModule.forFeature([ProductEntity]),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          dialect: 'mysql',
          host: configService.get<string>('mysql.host'),
          port: configService.get<number>('mysql.port'),
          username: configService.get<string>('mysql.username'),
          password: configService.get<string>('mysql.password'),
          database: configService.get<string>('mysql.database'),
          synchronize: true,
          autoLoadModels: true,
          models: [ProductEntity],
        };
      },
    }),
  ],
  providers: [ProductSQLRepository],
  exports: [ProductSQLRepository],
})
export class InfrastructureModule {}
