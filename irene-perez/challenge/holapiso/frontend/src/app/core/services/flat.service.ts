import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiData } from '../../core/model/flat';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  private flatsUrl = environment.flatsUrl;

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
