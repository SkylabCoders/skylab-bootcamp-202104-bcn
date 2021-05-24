import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/constants/heroes-mock';
import { Hero } from '../../core/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes?: Hero[];

  constructor() { }

  ngOnInit(): void {
    this.heroes = HEROES.slice(1,5);
  }

}
