import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Materia} from '../model/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
private materiaUrl: string;
  constructor(private http: HttpClient) {
    this.materiaUrl = 'http://localhost:8080/materia';
  }
  public findAll(token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<any>(this.materiaUrl , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public save(materia: Materia , token: string){
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post<any>(this.materiaUrl, materia , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public update(materia: Materia , token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put<any>(this.materiaUrl, materia , { headers, responseType: 'text' as 'json' });
  }
  public getById(id: number , token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`${this.materiaUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }
  // tslint:disable-next-line:typedef
  public delete(id: number , token: string) {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(`${this.materiaUrl}/${id}` , { headers, responseType: 'text' as 'json' });
  }


}
