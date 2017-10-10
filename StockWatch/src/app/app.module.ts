import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {StockListService} from './stock-list/stock-list.service';
import {StockListApi} from './stock-list/stock-list.api';



import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StockListService, StockListApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
