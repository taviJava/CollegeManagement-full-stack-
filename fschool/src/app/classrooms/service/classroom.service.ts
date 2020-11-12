import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
  public findAll(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.classroomsUrl);
  }
  // tslint:disable-next-line:typedef
  public save(classroom: Classroom) {
    return this.http.post<Classroom>(this.classroomsUrl, classroom);
  }
  // tslint:disable-next-line:typedef
  public update(classroom: Classroom) {
    return this.http.put<Classroom>(this.classroomsUrl, classroom);
  }
  public getById(id: number): Observable<any> {
    return this.http.get<Classroom>(`${this.classroomsUrl}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public delete(id: number){
    return this.http.delete(`${this.classroomsUrl}/${id}`);
  }




}
