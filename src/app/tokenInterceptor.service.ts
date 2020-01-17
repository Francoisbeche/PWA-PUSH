import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

//import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTIxYTZjNjM5OWRkMTJlNmM2ZDNmYTAiLCJpYXQiOjE1NzkyNjM2ODYsImV4cCI6MTU3OTM0OTY4Nn0.jPO-8ykxLI-LyaY-FgSyXej2sEzP5GrZ5VP_RPGsFeY`
      }
    });
    return next.handle(request);
  }
}