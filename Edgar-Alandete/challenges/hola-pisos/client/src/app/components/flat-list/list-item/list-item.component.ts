import { Component, Input, OnInit } from '@angular/core';
import { Flat } from 'src/app/core/models/flat';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() flat?: Flat
  constructor() { }

  ngOnInit(): void {
  }

}
