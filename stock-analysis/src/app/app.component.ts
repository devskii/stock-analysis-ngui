import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stock-analysis';

  goodSize = false;
  prominent = false;
  goodDividend = false;
  debtToEquityRatio: number = -1;
  totalCurrentAssets: number = -1;
  totalCurrentLiabilities: number = -1;

  setLargeCap(cap: boolean) {
    this.goodSize = cap;
  }

  setProminent(bool: boolean) {
    this.prominent = bool;
  }

  setGoodDividend(bool: boolean) {
    this.goodDividend = bool;
  }

  setDebtToEquityRatio(event: any) {
    this.debtToEquityRatio = event.target.value;
  }

  setAssets(event: any) {
    this.totalCurrentAssets = event.target.value || -1;
  }

  setLiabilities(event: any) {
    this.totalCurrentLiabilities = event.target.value || -1;
  }

  constructor() {}
}
