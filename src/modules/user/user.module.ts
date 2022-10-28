import { Module, Provider } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserSequelizeRepository } from './database/user-sequelize.repository';
import { UserRepositoryPort } from './core/ports/user.repository.port';
import { UserMapper } from './user.mapper';
import { UserService } from './core/services/user.service';
import { AuthService } from './core/services/auth.service';
import { UserSequelizeEntity } from './database/user-sequelize.entity';

const mappers: Provider[] = [UserMapper];

const repositories: Provider[] = [
  { provide: UserRepositoryPort, useClass: UserSequelizeRepository },
];

const services: Provider[] = [UserService, AuthService];

@Module({
  imports: [SequelizeModule.forFeature([UserSequelizeEntity])],
  providers: [...repositories, ...mappers, ...services],
  exports: [...services],
})
export class UserModule {}
