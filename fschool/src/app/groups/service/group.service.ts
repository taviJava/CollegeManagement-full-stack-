import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
  public findAll(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupUrl);
  }
  // tslint:disable-next-line:typedef
  public save(group: Group){
    return this.http.post<Group>(this.groupUrl, group);
  }
  // tslint:disable-next-line:typedef
  public update(group: Group) {
    return this.http.put<Group>(this.groupUrl, group);
  }
  public getById(id: number): Observable<any> {
    return this.http.get(`${this.groupUrl}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.groupUrl}/${id}`);
  }

}
