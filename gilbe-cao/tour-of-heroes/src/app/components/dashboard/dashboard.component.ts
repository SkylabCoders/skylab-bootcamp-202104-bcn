import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/core/models/hero';
import { HeroService } from 'src/app/core/services/hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes!: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes().slice(1, 5);
  }
}
