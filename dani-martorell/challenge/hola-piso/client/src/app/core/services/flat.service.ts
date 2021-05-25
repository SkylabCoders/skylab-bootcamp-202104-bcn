import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Flat} from './../models/flat';
import { Observable } from 'rxjs';
import { ApiData } from '../models/apiData';


@Injectable({
  providedIn: 'root'
})
export class FlatService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private HttpClient: HttpClient
  ) { }
  getFlats(url: string): Observable<ApiData> {
    return this.HttpClient.get<ApiData>(url)
  }
}
