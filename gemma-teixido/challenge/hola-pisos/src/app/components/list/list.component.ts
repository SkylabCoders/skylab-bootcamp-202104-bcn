import { Component, OnInit } from '@angular/core';
import { HolaPisosService } from 'src/app/core/hola-pisos.service';
import {flatInfo} from './../../core/model';

@Component({
  selector: 'hola-pisos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  info: flatInfo [] = [];

  constructor(private HolaPisosService: HolaPisosService) { }

  ngOnInit(): void {
    this.getFlatInfo()
  }

  getFlatInfo() {
    this.HolaPisosService.getFlatInfo()
    .subscribe((ApiData) => this.info = ApiData.data);
  }
}