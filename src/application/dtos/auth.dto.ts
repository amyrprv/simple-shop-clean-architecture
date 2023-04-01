import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthDTO {
  @ApiProperty({
    description: 'Token generated to access restricted endpoints',
  })
  @IsString()
  accessToken: string;

  @ApiProperty({ example: 'Bearer' })
  @IsString()
  tokenType: string;
}
