import { Injectable } from '@angular/core';
import { HEROES } from 'src/app/constant/heroes.mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() {
    return HEROES;
  }

  getHeroById(id:number){
    return HEROES.find((hero) => hero.id === +id);
  }
}
