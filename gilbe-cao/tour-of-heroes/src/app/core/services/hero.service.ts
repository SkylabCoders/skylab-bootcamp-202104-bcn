import { Injectable } from '@angular/core';
import { HEROES } from 'src/app/constants/heroes.mock';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes() {
    this.messageService.add('Loading heroes')
    return HEROES;
  }
  
  getHeroById(id: number) {
    this.messageService.add(`Loading hero with id: ${id}`)
    return HEROES.find((hero: Hero) => hero.id === id)
  }
}
