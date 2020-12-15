import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthPersonService} from './auth-person.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(public auth: AuthPersonService, public router: Router) { }

  canActivate(): boolean{
   return this.auth.isLoggedIn.getValue();
  }
}
