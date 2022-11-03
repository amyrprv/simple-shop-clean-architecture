import { Module, Provider } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserSequelizeRepository } from './database/user-sequelize.repository';
import { UserRepositoryPort } from './core/ports/user.repository.port';
import { UserMapper } from './database/user.mapper';
import { UserService } from './core/use-cases/user.use-case';
import { UserSequelizeEntity } from './database/user-sequelize.entity';

const mappers: Provider[] = [UserMapper];

const repositories: Provider[] = [
  { provide: UserRepositoryPort, useClass: UserSequelizeRepository },
];

const services: Provider[] = [UserService];

@Module({
  imports: [SequelizeModule.forFeature([UserSequelizeEntity])],
  providers: [...repositories, ...mappers, ...services],
  exports: [...services],
})
export class UserModule {}
