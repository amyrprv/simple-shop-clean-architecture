import { IsDate, IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { compare, genSalt, hash } from 'bcrypt';
import { UserRole } from '@core/common/enums/user-role.enum';
import { Entity } from '@core/common/entity/entity.common';
import { RemovableEntity } from '@core/common/entity/removable-entity.common';
import { Nullable } from '@core/common/type/types.common';
import { EditUserEntityPayload } from './type/edit-user-entity-payload.type';
import { CreateUserEntityPayload } from './type/create-user-entity-payload.type';

export class User extends Entity<string> implements RemovableEntity {
  constructor();
  constructor(payload: CreateUserEntityPayload);

  constructor(payload?: CreateUserEntityPayload) {
    super();

    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.email = payload.email;
    this.role = payload.role;
    this.password = payload.password;

    this.id = payload.id || null;
  }

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  readonly email: string;

  @IsEnum(UserRole)
  readonly role: UserRole;

  @IsString()
  password: string;

  @IsDate()
  readonly createdAt: Date;

  @IsOptional()
  @IsDate()
  updatedAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  deletedAt: Nullable<Date>;

  public async hashPassword(): Promise<void> {
    const salt: string = await genSalt();
    this.password = await hash(this.password, salt);

    await this.validate();
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.password);
  }

  public async edit(payload: EditUserEntityPayload): Promise<void> {
    const currentDate: Date = new Date();

    if (payload.firstName) {
      this.firstName = payload.firstName;
      this.updatedAt = currentDate;
    }
    if (payload.lastName) {
      this.lastName = payload.lastName;
      this.updatedAt = currentDate;
    }

    await this.validate();
  }

  public async remove(): Promise<void> {
    this.deletedAt = new Date();
    await this.validate();
  }
}
