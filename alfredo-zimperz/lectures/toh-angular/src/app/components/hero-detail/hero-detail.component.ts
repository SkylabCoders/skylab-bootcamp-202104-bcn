import { heroes } from './../../constants/heroes.mock';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero 

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const {heroId}  = this.activatedRoute.snapshot.params
    this.hero = heroes.find((hero: Hero) => hero.id === +heroId)
  }

}
