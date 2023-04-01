import { User } from "@domain/entities/user.entity";

export abstract class UserRepository{
    abstract findByUsername(username:string): Promise<User>;
}