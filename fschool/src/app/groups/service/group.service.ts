import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Materia} from '../../materies/model/materia';
import {Group} from '../model/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupUrl: string;
  constructor(private http: HttpClient) {
    this.groupUrl = 'http://localhost:8080/group';
  }
  public findAll(token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<any>(this.groupUrl , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public save(group: Group , token: string){
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<any>(this.groupUrl, group , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public update(group: Group , token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put<any>(this.groupUrl, group , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public deleteStud(group: Group , idStud: number, token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put<any>(`${this.groupUrl}/student/${idStud}`, group , { headers, responseType: 'text' as 'json' });
  }
  public getById(id: number , token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`${this.groupUrl}/${id}` , { headers, responseType: 'text' as 'json' } );
  }
  // tslint:disable-next-line:typedef
  public delete(id: number , token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(`${this.groupUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }

}
