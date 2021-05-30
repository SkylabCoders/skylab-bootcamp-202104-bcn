import { Component, OnInit } from '@angular/core';
import { Flat } from './../../core/models/flat';
import {FlatService} from './../../core/services/flat.service'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit {
  
  private flatsUrl = environment.flatsUrl;

  flats: Flat[] = [];
  nextFlats: string = '';

  constructor( private flatService :FlatService) { }

  ngOnInit(): void {
    this.getFlats(this.flatsUrl);
  }

  getFlats(url: string): void {
    this.flatService.getFlats(url)
    .subscribe(apiData => {
      this.nextFlats = apiData.links.next.href;
      this.flats = [...this.flats, ...apiData.data];
      })
  }

}
