import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes = this.heroService.getHeroes();

  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes= this.heroService.getHeroes()
  }

}
