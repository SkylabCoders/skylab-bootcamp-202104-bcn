import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlatList } from 'src/app/core/models/flatList';
import { FlatsService } from 'src/app/core/services/flats.service';
import { FlatItemComponent } from '../flat-item/flat-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  flatList!: FlatList | undefined;
  
  constructor(private flatService: FlatsService) { }

  ngOnInit(): void {
    this.flatService.getFlatList().subscribe( flatList => this.flatList = flatList) }
}
