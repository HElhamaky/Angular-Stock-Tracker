import { Component } from '@angular/core';
import { StocksService, StockInterface } from './services/stocks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Declares a property of an array of stocks
  stocks: Array<StockInterface>;
  constructor(service: StocksService) {
          service.load(['AAPL']).subscribe(stocks => {
          //When the data loads, it will store it on the stocks property
          this.stocks = stocks;                                                    
          });
  }
}
