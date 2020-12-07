import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profesor} from '../../profesors/model/profesor';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl: string;

  constructor(private http: HttpClient) {
    this.studentUrl = 'http://localhost:8080/student';
  }

  public findAll(token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<any>(this.studentUrl , { headers, responseType: 'text' as 'json' });
  }

  public findAllWithoutGroup(token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<any>(`${this.studentUrl}/group` , { headers, responseType: 'text' as 'json' });
  }

  public save(student: Student , token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<any>(this.studentUrl, student , { headers, responseType: 'text' as 'json' });
  }

  public update(student: Student , token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put<any>(this.studentUrl, student , { headers, responseType: 'text' as 'json' });
  }

  public getById(id: number , token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`${this.studentUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }

  // tslint:disable-next-line:typedef
  public delete(id: number , token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(`${this.studentUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }
}
