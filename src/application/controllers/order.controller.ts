import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@application/guards/auth.guard';

@ApiTags('order')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('/api/v1/order')
export class OrderController {
  @Post('/')
  createOrder() {}
}
