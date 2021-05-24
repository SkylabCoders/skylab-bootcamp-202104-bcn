import { Component, OnInit } from '@angular/core';
import { Flat } from './../../core/model';
import { PisoService } from './../../core/piso.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  flats: Flat[] = [];

  constructor(private flatService: PisoService) { }

  ngOnInit(): void {
    this.getFlats()
  }

  getFlats() {
    this.flatService.getFlats()
    .subscribe((apiData) => this.flats = apiData.data);
    
  }
}