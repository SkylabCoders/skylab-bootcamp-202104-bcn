import { Component } from '@angular/core';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {
  heroes = this.heroService.getHeroes();
  
  constructor(private heroService: HeroService) {}
}
