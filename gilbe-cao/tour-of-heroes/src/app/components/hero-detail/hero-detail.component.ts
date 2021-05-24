import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HEROES } from 'src/app/constants/heroes.mock';
import { HeroService } from 'src/app/core/services/hero.service';
import { Hero } from '../../core/models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) { 
  }

  ngOnInit(): void {
    const {heroId} = this.activatedRoute.snapshot.params;
    this.hero = this.heroService.getHeroById(+heroId);
  }

}
