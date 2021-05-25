import { Component, OnInit } from '@angular/core';
import { flatList } from '../../core/model';
import { HolaPisosService } from './../../core/hola-pisos.service'

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit {

  data: flatList[] = [];
  
  constructor(
    private flatService: HolaPisosService
  ) { }

  ngOnInit(): void {
    this.getFlats();
  }
  
  getFlats() {
    this.flatService.getFlats()
    .subscribe((apiData) => this.data = apiData.data)
  }

}
