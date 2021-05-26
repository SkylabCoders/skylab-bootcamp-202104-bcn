import { HeroService } from './../../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../../core/models/hero'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes? : Hero[]

    selectedHero!: Hero 
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes()
  }

}
