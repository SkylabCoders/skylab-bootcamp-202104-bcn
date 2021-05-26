import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlatList } from '../models/flatList';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlatsService {
  private url = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getFlatList(): Observable<FlatList> {
    return this.http.get<FlatList>(this.url);
  }
}
