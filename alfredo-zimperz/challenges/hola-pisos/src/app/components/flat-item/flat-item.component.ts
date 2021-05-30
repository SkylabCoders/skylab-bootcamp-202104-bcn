import { FlatList } from './../../core/models/FlatList';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-item',
  templateUrl: './flat-item.component.html',
  styleUrls: ['./flat-item.component.css']
})
export class FlatItemComponent implements OnInit {

  @Input() flat?: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.flat)
  }

}
