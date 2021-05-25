
import { Component } from '@angular/core';
import {HouseService} from './house.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  p:any;
  data:any=[]

  constructor(private  http: HouseService){
    this.http.getHouses().subscribe(data =>
      this.data = data
      )
  }
}
