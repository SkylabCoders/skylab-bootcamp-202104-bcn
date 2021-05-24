import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import {FlatList} from '../models/FlatList'

const url : string = environment.api_url

@Injectable({
  providedIn: 'root'
})
export class FlatsService {

  constructor(private httpClient: HttpClient) { }

  getFlats(): Observable<FlatList> {
    return  this.httpClient.get<FlatList>(url);
  }
}
