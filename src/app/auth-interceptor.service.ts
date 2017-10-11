import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService  implements HttpInterceptor{
  authReq: HttpRequest<any>;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if(localStorage.AUTH_TOKEN){
      this.authReq = req.clone({
        headers: req.headers.set('Authorization', 'token ' + localStorage.AUTH_TOKEN)
      });
    }else{
      this.authReq = req.clone();
    }
    return next.handle(this.authReq);
  }

  constructor() { }

}
