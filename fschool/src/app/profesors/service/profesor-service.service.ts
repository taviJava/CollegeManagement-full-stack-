import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profesor} from '../model/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorServiceService {
  private profesorUrl: string;
  constructor(private http: HttpClient) {
    this.profesorUrl = 'http://localhost:8080/profesors';
  }
  public findAll(token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<any>(this.profesorUrl, { headers, responseType: 'text' as 'json' });
  }

  public save(profesor: Profesor, token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<any>(this.profesorUrl, profesor , { headers, responseType: 'text' as 'json' });
  }

  public update(profesor: Profesor, token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put<any>(this.profesorUrl, profesor , { headers, responseType: 'text' as 'json' });
  }

  public getById(id: number, token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`${this.profesorUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public delete(id: number , token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(`${this.profesorUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }


}
