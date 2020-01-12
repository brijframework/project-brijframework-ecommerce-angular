/*
 * Project: OrthoLogiq
 * File Created: Tuesday, 24th April 2018 6:59:35 pm
 * Author: Parmod Kumar (parmod@omniesolutions.com)
 * -----
 * Last Modified: Tuesday, 24th July 2018 8:52:31 pm
 * Modified By: Parmod Kumar (parmod@omniesolutions.com)
 * -----
 * Copyright 2018 , Orthosensor Inc.
 * Developed By:  Omnie Solutions Pvt LTD.
 */

import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //const auth = this.injector.get(UserService);
     // if (auth != null && auth.getToken()) {
     //   request = request.clone({
     //     setHeaders: {
     //       'Authorization': 'Bearer' + ' ' + auth.getToken(),
      ////      'Content-Type': 'application/json'
     //     }
     //   });
     // } else {
     //   request = request.clone({
     //     setHeaders: {
    //        'Content-Type': 'application/json'
     //     }
     //   });
     // }
    // }
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      } });
    return next.handle(request);
  }
}
