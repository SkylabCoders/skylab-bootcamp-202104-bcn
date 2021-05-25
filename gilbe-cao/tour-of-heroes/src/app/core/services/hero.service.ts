import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url: string = environment.heroApi;

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Loading heroes')
    return this.httpClient.get<Hero[]>(this.url);
  }
  
  getHeroById(id: string): Observable<Hero> {
    this.messageService.add(`Loading hero with id: ${id}`)
    return this.httpClient.get<Hero>(`${this.url}/${id}`);
  }
}
