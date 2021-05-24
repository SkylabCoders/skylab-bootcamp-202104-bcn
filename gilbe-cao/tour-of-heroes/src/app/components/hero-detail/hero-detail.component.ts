import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HEROES } from 'src/app/constants/heroes.mock';
import { Hero } from '../../core/models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    const {heroId} = this.activatedRoute.snapshot.params;
    this.hero = HEROES.find((hero: Hero) => hero.id === +heroId)
  }

}
