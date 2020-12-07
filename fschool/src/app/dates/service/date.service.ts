import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DateJavaModel} from '../model/date-java-model';
import {Message} from '../model/message';


@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dateUrl: string;
  constructor(private http: HttpClient) { this.dateUrl = 'http://localhost:8080/date'; }

  public findAll(token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<any>(this.dateUrl , { headers, responseType: 'text' as 'json' });
  }

  // tslint:disable-next-line:typedef
  public save(date: DateJavaModel, profId: number, classId: number, groupId: number , token: string): Observable<any>{
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<any>(`${this.dateUrl}/${profId}/${groupId}/${classId}`, date , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public update(date: DateJavaModel , token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put<any>(this.dateUrl, date , { headers, responseType: 'text' as 'json' });
  }
  public getById(id: number , token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`${this.dateUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public delete(id: number , token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(`${this.dateUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }

}
