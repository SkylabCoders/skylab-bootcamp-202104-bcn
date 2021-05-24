import { Component, OnInit } from '@angular/core';
import { Flat} from './../../core/model/flat';
import { FlatService} from './../../core/services/flat.service';

@Component({
  selector: 'app-flats-list',
  templateUrl: './flats-list.component.html',
  styleUrls: ['./flats-list.component.scss']
})

export class FlatsListComponent implements OnInit {
  flats: Flat [] = [];
  
  constructor(private flatService: FlatService) { }

  ngOnInit(): void {
    this.getFlats()
  }

  getFlats() {
    this.flatService.getFlats()
     .subscribe((apiData) => this.flats = apiData.data);

  }
}
