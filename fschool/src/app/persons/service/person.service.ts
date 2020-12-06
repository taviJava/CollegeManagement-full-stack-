import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../../students/model/student';
import {Person} from '../model/person';
import {Profesor} from '../../profesors/model/profesor';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personUrl: string;

  constructor(private http: HttpClient) {
    this.personUrl = 'http://localhost:8080/person';
  }
  public save(person: Person): Observable<any> {
    console.log(person);
    return this.http.post<any>(this.personUrl, person);
  }
  public getByEmail(email: string, token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`http://localhost:8080/person/${email}`, { headers, responseType: 'text' as 'json' });
  }
  // public findAll(token: string): Observable<Profesor[]> {
  //   const tokenStr = 'Bearer ' + token;
  //   const headers = new HttpHeaders().set('Authorization', tokenStr);
  //   return this.http.get<Profesor[]>(this.profesorUrl, { headers, responseType: 'text' as 'json' });
  // }
}
