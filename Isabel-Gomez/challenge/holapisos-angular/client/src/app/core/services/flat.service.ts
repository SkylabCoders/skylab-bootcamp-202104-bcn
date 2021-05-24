import { ApiData } from './../models/api-data';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FlatService {

  private flatsUrl = environment.flatsUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  getFlats(): Observable<ApiData> {
    return this.httpClient.get<ApiData>(this.flatsUrl)
  }
}
