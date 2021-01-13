import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let userName = this.basicAuthenticationService.getAuthenticatedUser();
    
    if (basicAuthHeaderString && userName) {
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        });
    }
      
    return next.handle(request);
  }

}
