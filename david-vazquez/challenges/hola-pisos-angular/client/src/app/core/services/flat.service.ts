import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiData } from './../model/flat';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getFlats(url: string): Observable<ApiData> {
    return this.httpClient.get<ApiData>(url);
  }

  constructor(private httpClient: HttpClient) { }
}
