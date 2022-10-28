import { RepositoryPort } from '../../../../libs/ports/repository.port';
import { UserDomain } from '../domain/user.domain';

export abstract class UserRepositoryPort extends RepositoryPort<UserDomain> {
    
}
