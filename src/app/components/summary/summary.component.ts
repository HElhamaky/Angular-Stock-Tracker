import { Input ,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() stock: any;

  constructor() { }

  isNegative() {
    return (this.stock && this.stock.change < 0);
    }
    //Method to check if stock is positive                           
    isPositive() {
    return (this.stock && this.stock.change > 0);
    }
  ngOnInit() {
    
  }

}
