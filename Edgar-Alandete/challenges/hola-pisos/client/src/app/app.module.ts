import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlatListComponent } from './components/flat-list/flat-list.component';
import { ListItemComponent } from './components/flat-list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FlatListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
