import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { NestResponse } from './nest-response';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((responseController: NestResponse) => {
          if (responseController instanceof NestResponse) {
            const ctx = context.switchToHttp();
            const response = ctx.getResponse();
            const { status, headers, body } = responseController;

            const headersNames = Object.getOwnPropertyNames(headers);
            headersNames.forEach(headerName => {
              const headerValue = headers[headerName];
              this.httpAdapter.setHeader(response, headerName, headerValue);
            });
            this.httpAdapter.status(response, status);
            
            return body;
          }
          return responseController;
        })
      );
  }
}
