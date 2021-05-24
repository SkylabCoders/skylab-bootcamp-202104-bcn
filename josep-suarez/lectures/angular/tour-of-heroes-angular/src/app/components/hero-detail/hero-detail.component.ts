import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Hero} from '../../hero'
import {HEROES} from '../../assets/hero-mock'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const {heroId} = this.route.snapshot.params;
    this.hero = HEROES.find(hero => hero.id === +heroId)
  }

}
