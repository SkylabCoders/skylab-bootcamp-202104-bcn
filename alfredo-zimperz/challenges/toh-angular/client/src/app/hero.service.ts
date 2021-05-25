import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url: string = 'http://localhost:2021/api/heroes';

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