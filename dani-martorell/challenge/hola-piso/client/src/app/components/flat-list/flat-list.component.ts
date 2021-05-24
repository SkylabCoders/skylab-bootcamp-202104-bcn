import { Component, OnInit } from '@angular/core';
import { Flat } from './../../core/models/flat';
import {FlatService} from './../../core/services/flat.service'

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit {

  flats: Flat[] = [];

  constructor( private flatService :FlatService) { }

  ngOnInit(): void {
    this.getFlats();
  }

  getFlats(): void {
    this.flatService.getFlats()
    .subscribe(apiData => this.flats = apiData.data);
  }

}
