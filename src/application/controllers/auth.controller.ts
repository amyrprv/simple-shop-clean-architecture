import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from '@application/services/username-auth.service';
import { AuthDTO } from '@application/dtos/auth.dto';
import { HttpResponse } from '@domain/libs/http-response.base';
import { LoginDTO } from '@application/dtos/login.dto';

@ApiTags('Auth')
@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({summary: 'login user'})
  login(@Body() loginDto: LoginDTO) : Promise<HttpResponse<AuthDTO>> {
    return this.authService.login(loginDto);
  }
}
