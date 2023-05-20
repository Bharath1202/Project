import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  public basicAuth;
  public token;
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    this.basicAuth = `Basic ` + btoa('upturn:DAF87DSFDSFDSA98FSADKJE324KJL32HFD7FDSFB24343J49DSF');
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: this.basicAuth,
          token: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          Authorization: this.basicAuth,
          'Content-Type': 'application/json',
        }
      });
    }
    return next.handle(request);
  }
}
