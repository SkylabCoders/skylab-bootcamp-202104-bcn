import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/constants/heroes-mock';
import { HeroService } from 'src/app/core/services/hero.service';
import { Hero } from '../../core/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes?: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes().slice(1,5);
  }

}
