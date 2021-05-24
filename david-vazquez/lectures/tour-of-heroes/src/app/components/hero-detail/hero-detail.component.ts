import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../hero';
import {HEROES} from './../../constant/heroes.mock';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { heroId } = this.activatedRoute.snapshot.params;
    this.hero= HEROES.find((hero: Hero) => hero.id === +heroId);
  }

}
