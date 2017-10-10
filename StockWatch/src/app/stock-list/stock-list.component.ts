import { Component, OnInit } from '@angular/core';
import {StockListService} from './stock-list.service';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  constructor(private stockListService: StockListService) { }

  ngOnInit() {
  }

}
