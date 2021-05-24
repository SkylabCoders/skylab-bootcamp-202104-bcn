import { Component } from '@angular/core';
import { HEROES } from 'src/app/constants/heroes.mock';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes = HEROES.slice(1, 5);
}
