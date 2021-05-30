import { FlatsService } from '../../core/services/flats.service';
import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/core/models/Flat';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  flatListData: Flat[] = []
  nextFlatlistUrl : string | undefined = undefined
  flatListCount : number = 0

  constructor(private flatService: FlatsService) { }

  ngOnInit(): void {
    this.getFlatlist()
  }

  getFlatlist(url = this.nextFlatlistUrl) {
    this.flatService.getFlats(url).subscribe( flatListApi => {
     this.flatListData = [...this.flatListData, ...flatListApi.data]
     this.flatListCount = +flatListApi.meta.count
     this.nextFlatlistUrl = flatListApi.links.next.href
    }
     ) 
  }

}
