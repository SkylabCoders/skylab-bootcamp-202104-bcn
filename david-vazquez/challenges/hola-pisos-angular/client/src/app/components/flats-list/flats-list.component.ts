import { Component, OnInit } from '@angular/core';
import { Flat} from './../../core/model/flat';
import { FlatService} from './../../core/services/flat.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-flats-list',
  templateUrl: './flats-list.component.html',
  styleUrls: ['./flats-list.component.scss']
})

export class FlatsListComponent implements OnInit {
  flats: Flat [] = [];
  next: string = '';

  private flatUrl = environment.flatsUrl;
  constructor(private flatService: FlatService) { }

  ngOnInit(): void {
    this.getFlats(this.flatUrl)
  }

  getFlats(url : string) {
    this.flatService.getFlats(url)
     .subscribe((apiData) => {
      this.flats = [...this.flats, ...apiData.data];
      this.next = apiData.links.next.href});

  }
  handleClick() {
    this.getFlats(this.next)
  }
}
