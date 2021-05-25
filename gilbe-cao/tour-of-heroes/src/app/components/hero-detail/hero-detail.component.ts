import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/core/services/hero.service';
import { Hero } from '../../core/models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero = {} as Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) { 
  }

  ngOnInit(): void {
    const {heroId} = this.activatedRoute.snapshot.params;
    this.heroService.getHeroById(heroId).subscribe(hero => this.hero = hero)
  }

}
