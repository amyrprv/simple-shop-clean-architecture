import { ExceptionBase } from '@domain/libs/exceptions/exception.base';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(ExceptionBase)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: ExceptionBase, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    // const status = exception.getStatus();
    
    response
      .status(400)
      .json({
        message: exception.message,
        code:exception.code,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}