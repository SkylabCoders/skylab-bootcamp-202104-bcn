
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private url = "https://pokeapi.co/api/v2/pokemon/"
  

  constructor(
    private http: HttpClient,
  ) { }

  getHouses(){
    return this.http.get(`${this.url}`)
  }

  
  
  

}
