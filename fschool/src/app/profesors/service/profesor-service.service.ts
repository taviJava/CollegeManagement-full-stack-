import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
  public findAll(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.profesorUrl);
  }

  public save(profesor: Profesor): Observable<any> {
    return this.http.post<any>(this.profesorUrl, profesor);
  }

  public update(profesor: Profesor): Observable<any> {
    console.log(profesor);
    JSON.stringify(profesor);
    console.log(profesor);
    return this.http.put<any>(this.profesorUrl, profesor);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.profesorUrl}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.profesorUrl}/${id}`);
  }


}
