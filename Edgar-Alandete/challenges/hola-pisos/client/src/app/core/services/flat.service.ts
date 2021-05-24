import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiData } from '../models/apiData';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getFlats(url: string): Observable<ApiData> {
    return this.httpClient.get<ApiData>(url);
  }

}
