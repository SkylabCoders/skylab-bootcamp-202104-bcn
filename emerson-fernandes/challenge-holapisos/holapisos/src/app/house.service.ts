import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private houseUrl='https://apidev.holapisos.com/es/api/node/inmuebles?page[limit]=32&page[offset]=0&sort[w[…]nmu_tipo_sin_agru,field_inmu_tipo_via,field_inmu_nomb_call'

  httpOptions={
    headers: new HttpHeaders({'Content-Type': 'applicationjson'})
  }

  constructor(
    private http: HttpClient,
  ) { }

  getHouse():Observable<
}
