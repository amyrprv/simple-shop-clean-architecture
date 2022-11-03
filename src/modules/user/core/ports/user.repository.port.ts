import { RepositoryPort } from '../../../../libs/ports/repository.port';
import { UserModel } from '../models/user.model';

export abstract class UserRepositoryPort extends RepositoryPort<UserModel> {
    
}
