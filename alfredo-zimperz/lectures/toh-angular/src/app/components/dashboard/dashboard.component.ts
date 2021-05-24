import { HeroService } from './../../core/services/hero.service';
import { Hero } from '../../core/models/hero';
import { Component, OnInit } from '@angular/core';
import { heroes } from 'src/app/constants/heroes.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes?: Hero[]
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes().slice(1,5)
  }

}
