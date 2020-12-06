import { Injectable } from '@angular/core';
import {AuthPersonService} from './auth-person.service';
import {HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonHttpInterceptorService {
  constructor(private authenticationService: AuthPersonService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          // 'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem(this.authenticationService.TOKEN_SESSION_ATTRIBUTE_NAME)
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
