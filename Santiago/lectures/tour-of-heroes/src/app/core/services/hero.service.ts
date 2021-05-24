import { Injectable } from '@angular/core';
import { HEROES } from 'src/app/constants/heroes-mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(){
    return HEROES;
  }

  getHeroeById(){
    
  }
}
