import { ApiData } from './model/apiData';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment }  from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HolaPisosService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getFlats(url: string): Observable<ApiData> {
    return this.httpClient.get<ApiData>(url);
  }
  constructor( 
    private httpClient: HttpClient
   ) { }
  
}
