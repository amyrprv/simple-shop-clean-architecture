import { IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  username: string;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  password: string;
}
