import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
