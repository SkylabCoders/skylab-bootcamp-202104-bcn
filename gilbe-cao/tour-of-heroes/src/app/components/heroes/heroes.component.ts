import { Component } from '@angular/core';
import { Hero } from '../../core/models/hero';
import { HEROES } from '../../constants/heroes.mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {
  heroes = HEROES;
}
