import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({ example: 'james', description: "User's username" })
  @IsString()
  username: string;

  @ApiProperty({ example: '123', description: "User's password" })
  @IsString()
  password: string;
}
