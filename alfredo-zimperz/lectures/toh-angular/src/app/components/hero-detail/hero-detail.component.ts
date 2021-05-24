import { HeroService } from './../../core/services/hero.service';
import { heroes } from './../../constants/heroes.mock';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../../core/models/hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero 

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
    ) { }

  ngOnInit(): void {
    const {heroId}  = this.activatedRoute.snapshot.params
    this.hero = this.heroService.getHeroById(+heroId)
  }

}
