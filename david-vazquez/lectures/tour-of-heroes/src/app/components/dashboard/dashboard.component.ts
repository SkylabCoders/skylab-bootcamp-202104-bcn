import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  heroes=this.heroService.getHeroes();
  constructor(private heroService: HeroService){

  }

  ngOnInit() : void{ 
    this.heroes= this.heroService.getHeroes().slice(1,5);
  }
}
