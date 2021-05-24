import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/core/models/flat';
import { FlatService } from 'src/app/core/services/flat.service';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.scss']
})
export class FlatListComponent implements OnInit {

  flats: Flat[] = [];

  constructor(private flatService: FlatService) { }

  ngOnInit(): void {
    this.getFlats();
  }

  getFlats():void {
    this.flatService.getFlats()
      .subscribe((apiData) => this.flats = apiData.data);
  }

}
