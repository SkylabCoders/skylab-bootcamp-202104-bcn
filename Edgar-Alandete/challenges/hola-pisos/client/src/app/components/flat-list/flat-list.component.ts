import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/core/models/flat';
import { FlatService } from 'src/app/core/services/flat.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.scss']
})
export class FlatListComponent implements OnInit {

  flats: Flat[] = [];
  next: string = '';
  private flatsUrl = environment.flatsUrl;


  constructor(private flatService: FlatService) { }

  ngOnInit(): void {
    this.getFlats(this.flatsUrl);
  }

  getFlats(url: string):void {
    this.flatService.getFlats(url)
      .subscribe((apiData) => {
        this.flats = apiData.data;
        this.next = apiData.links.next.href;
      });
  }

}
