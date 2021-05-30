import { Hero } from './../models/hero';
import { Injectable } from '@angular/core';
import { heroes } from 'src/app/constants/heroes.mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() {
    return heroes
  }

  getHeroById(id: number) {
    return  heroes.find((hero: Hero) => hero.id === id)
  }
}
