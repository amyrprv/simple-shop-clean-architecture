import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserRequestDto } from '../dtos/register-user.request.dto';

@Controller('user')
export class CreateUserController {
  @Post('register')
  createUser(@Body() dto: RegisterUserRequestDto) {}
}
