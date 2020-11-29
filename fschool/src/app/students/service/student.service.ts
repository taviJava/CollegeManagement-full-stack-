import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  public save(student: Student): Observable<any> {
    return this.http.post<any>(this.studentUrl, student);
  }

  public update(student: Student): Observable<any> {
    return this.http.put<any>(this.studentUrl, student);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.studentUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.studentUrl}/${id}`);
  }
}
