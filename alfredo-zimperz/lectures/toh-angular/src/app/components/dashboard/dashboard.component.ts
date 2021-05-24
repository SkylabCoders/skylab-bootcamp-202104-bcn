import { Hero } from './../../hero';
import { Component, OnInit } from '@angular/core';
import { heroes } from 'src/app/constants/heroes.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes?: Hero[] = heroes.slice(1,5)
  constructor() { }

  ngOnInit(): void {
  }

}
