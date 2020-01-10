import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Declares a stock array and API variables
let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';


//Defines and exports the TypeScript interface for a stock object
export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

// Annotates with Injectable to wire up dependency injection
@Injectable()
export class StocksService {
  
  //Constructor method to inject HttpClient service into class http property
  constructor(private http: HttpClient) {}

    //Method to get the stocks
      get() {
      return stocks.slice();
      }
      
      //Method to add a new stock to list
      add(stock) {
      stocks.push(stock);
      return this.get();
      }

      //Method to remove a stock from list
      remove(stock) {
      stocks.splice(stocks.indexOf(stock), 1);
      return this.get();
      }

      //Method to call HttpClient service to load stock values from API
      load(symbols) {
      if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }}
  }
