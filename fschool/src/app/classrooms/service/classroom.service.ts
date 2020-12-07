import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Classroom} from '../model/classroom';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
private classroomsUrl: string;
  constructor(private http: HttpClient) {
    this.classroomsUrl = 'http://localhost:8080/classroom';
  }
  public findAll(token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<any>(this.classroomsUrl , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public save(classroom: Classroom , token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<any>(this.classroomsUrl, classroom , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public update(classroom: Classroom , token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put<any>(this.classroomsUrl, classroom , { headers, responseType: 'text' as 'json' });
  }
  public getById(id: number , token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<any>(`${this.classroomsUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public delete(id: number , token: string){
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(`${this.classroomsUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }




}
