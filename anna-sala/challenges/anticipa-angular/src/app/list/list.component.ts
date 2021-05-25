import { Component, OnInit } from '@angular/core';
import { ListService } from '../core/services/list.service';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  apartments:any=[]
  nextPage: string = '';

  constructor(private list:ListService) { 
    
  }

  ngOnInit(): void {
    this.list.getData(environment.url).subscribe(apiData =>{
      console.log(apiData);
      this.apartments = [...this.apartments, ...apiData.data];
      this.nextPage = apiData.links.next.href;
    })
  }

}
