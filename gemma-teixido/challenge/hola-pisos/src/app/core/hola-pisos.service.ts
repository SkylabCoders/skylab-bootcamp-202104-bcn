import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiData } from './../core/model'


@Injectable({
  providedIn: 'root'
})
export class HolaPisosService {
  private holaPisosApi = environment.holaPisosApi;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getFlatInfo(): Observable<ApiData> {
    return this.http.get<ApiData>(this.holaPisosApi);
  }

  constructor(
    private http: HttpClient
  ) { }
}