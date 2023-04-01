import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductEntity } from '@infrastructure/sequelize/entities/product.entity';
import { UserEntity } from '@infrastructure/sequelize/entities/user.entity';
import { ProductSQLRepository } from '@infrastructure/sequelize/repositories/product.sql.repository';
import { UserSQLRepository } from '@infrastructure/sequelize/repositories/user.sql.repository';
import { TokenAdapter } from '@infrastructure/adapters/token.adapter';

@Module({
  imports: [
    SequelizeModule.forFeature([ProductEntity, UserEntity]),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get<string>('mysql.host'),
        port: configService.get<number>('mysql.port'),
        username: configService.get<string>('mysql.username'),
        password: configService.get<string>('mysql.password'),
        database: configService.get<string>('mysql.database'),
        synchronize: true,
        autoLoadModels: true,
        models: [ProductEntity],
      }),
      inject: [ConfigService],
    }),
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     secret: configService.get<string>('jwtSecret'),
    //     global: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    // TODO: use registerAsync instead
    JwtModule.register({ secret: 'asd', global: true }),
  ],
  providers: [ProductSQLRepository, UserSQLRepository, TokenAdapter],
  exports: [ProductSQLRepository, UserSQLRepository, TokenAdapter],
})
export class InfrastructureModule {}
