import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiData } from './../model/flat';

@Injectable({
  providedIn: 'root'
})
export class FlatService {
  private flatUrl = environment.flatsUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getFlats(): Observable<ApiData> {
    return this.httpClient.get<ApiData>(this.flatUrl);
  }

  constructor(private httpClient: HttpClient) { }
}
