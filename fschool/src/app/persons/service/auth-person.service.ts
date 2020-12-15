import { Injectable } from '@angular/core';
import {Person} from '../model/person';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PersonService} from './person.service';
import {Student} from '../../students/model/student';

@Injectable({
  providedIn: 'root'
})
export class AuthPersonService {
// BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  TOKEN_SESSION_ATTRIBUTE_NAME = 'authenticatedUserToken';
  USER_DATA_SESSION_ATTRIBUTE_NAME = 'authenticatedUserData';


  public username: string;
  public password: string;
  public person: Person = new Person();
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public ret = false;
  public isPrivilege: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, public personService: PersonService) {
  }

  // tslint:disable-next-line:typedef
  authenticationService(person: Person): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/basicauth`, person);
  }

  // tslint:disable-next-line:typedef
  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  // tslint:disable-next-line:typedef
  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem(this.TOKEN_SESSION_ATTRIBUTE_NAME, this.createBasicAuthToken(username, password));
    this.personService.getByEmail(username, this.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.person = new Person();
      this.person = JSON.parse(data) as Person;
      sessionStorage.setItem(this.USER_DATA_SESSION_ATTRIBUTE_NAME, JSON.stringify(this.person));
      this.isLoggedIn.next(true);
    });
  }
  // tslint:disable-next-line:typedef
  getLoggedInUserName() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) {
      return '';
    }
    return user;
  }
  // tslint:disable-next-line:typedef
  returnUser(){
    return JSON.parse(sessionStorage.getItem(this.USER_DATA_SESSION_ATTRIBUTE_NAME));
  }
  // tslint:disable-next-line:typedef
  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.TOKEN_SESSION_ATTRIBUTE_NAME = 'null';
    sessionStorage.removeItem(this.TOKEN_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.USER_DATA_SESSION_ATTRIBUTE_NAME);
    this.isLoggedIn.next(false);
    this.username = null;
    this.password = null;
  }
  isUserLoggedIn(): boolean {
   if (this.TOKEN_SESSION_ATTRIBUTE_NAME !== 'null'){
     return true;
   }
  }
}
