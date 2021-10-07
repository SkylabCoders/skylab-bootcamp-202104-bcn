import { Component } from '@angular/core';
import { Hero } from '../../core/hero';
import { HEROES } from './../../constants/heroes-mock';
import { HeroService } from './../../core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{
  heroes = this.heroService.getHeroes();

  constructor(private heroService: HeroService) {}
}
