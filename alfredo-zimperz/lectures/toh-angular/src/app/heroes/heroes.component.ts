import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {heroes} from '../constants/heroes.mock'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = heroes

    selectedHero!: Hero 
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
