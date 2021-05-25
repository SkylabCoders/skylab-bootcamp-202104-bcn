import { ApiData } from '../../app/core/model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment }  from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HolaPisosService {
  private flatsUrl = environment.flatUrl;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getFlats(): Observable<ApiData> {
    return this.http.get<ApiData>(this.flatsUrl);
  }
  constructor( 
    private http: HttpClient
   ) { }
  
}
