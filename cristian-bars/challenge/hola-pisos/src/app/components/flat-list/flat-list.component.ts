import { Component, OnInit } from '@angular/core';
import { Flat } from '../../core/model/flat';
import { HolaPisosService } from './../../core/hola-pisos.service';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit {
  
  private flatUrl = environment.flatUrl;

  flats: Flat[] = [];
  
  constructor(
    private flatService: HolaPisosService
  ) { }

  ngOnInit(): void {
    this.getFlats(this.flatUrl);
  }
  
  getFlats(url: string): void {
    this.flatService.getFlats(url)
    .subscribe((apiData) => this.flats = [...this.flats, ...apiData.data]);
  }

}
