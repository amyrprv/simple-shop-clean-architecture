import { ExceptionBase } from '@domain/libs/exceptions/exception.base';
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(ExceptionBase)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: ExceptionBase, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    
    response
      .status(exception.httpCode || 400)
      .json({
        message: exception.message,
        code:exception.code,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}