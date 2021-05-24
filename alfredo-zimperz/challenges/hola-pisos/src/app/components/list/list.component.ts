import { FlatList } from './../../core/models/FlatList';
import { FlatsService } from '../../core/services/flats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  flatlist: FlatList | undefined

  constructor(private flatService: FlatsService) { }

  ngOnInit(): void {
   this.flatService.getFlats().subscribe( flatListApi => this.flatlist = {
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
