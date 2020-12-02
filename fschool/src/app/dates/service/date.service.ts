import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {DateJavaModel} from '../model/date-java-model';
import {Message} from '../model/message';


@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dateUrl: string;
  constructor(private http: HttpClient) { this.dateUrl = 'http://localhost:8080/date'; }

  public findAll(): Observable<DateJavaModel[]> {
    return this.http.get<DateJavaModel[]>(this.dateUrl);
  }

  // tslint:disable-next-line:typedef
  public save(date: DateJavaModel, profId: number, classId: number, groupId: number): Observable<any>{
    return this.http.post<any>(`${this.dateUrl}/${profId}/${groupId}/${classId}`, date);
  }
  // tslint:disable-next-line:typedef
  public update(date: DateJavaModel) {
    return this.http.put<DateJavaModel>(this.dateUrl, date);
  }
  public getById(id: number): Observable<any> {
    return this.http.get(`${this.dateUrl}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.dateUrl}/${id}`);
  }

}
