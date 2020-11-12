import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Materia} from '../model/materia';
import {Profesor} from '../../profesors/model/profesor';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
private materiaUrl: string;
  constructor(private http: HttpClient) {
    this.materiaUrl = 'http://localhost:8080/materia';
  }
  public findAll(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.materiaUrl);
  }
  // tslint:disable-next-line:typedef
  public save(materia: Materia){
   return this.http.post<Materia>(this.materiaUrl, materia);
  }
  // tslint:disable-next-line:typedef
  public update(materia: Materia) {
    return this.http.put<Materia>(this.materiaUrl, materia);
  }
  public getById(id: number): Observable<any> {
    return this.http.get(`${this.materiaUrl}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.materiaUrl}/${id}`);
  }


}
