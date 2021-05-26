import { Component, OnInit } from '@angular/core';
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
    this.flatService.getFlatList().subscribe( flatListApi => this.flatList = {
      links:{
        last: {
          href: flatListApi.links.last.href
         },
         next: {
           href: flatListApi.links.next.href
          },
          self: {
           href: flatListApi.links.self.href
          },
      },
      meta:{
        count: flatListApi.meta.count
      },
      data: flatListApi.data
     })
  }
}
