import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CurrencyDict, currency } from '../../../../data/currencyDict'

@Component({
  selector: 'app-card-pricing-price',
  templateUrl: './card-pricing-price.component.html',
  styleUrls: ['./card-pricing-price.component.css']
})
export class CardPricingPriceComponent implements OnInit, OnChanges {
  @Input() gamePrice : string = ""
  private currency : currency

  constructor() {
    this.currency = CurrencyDict.filter(currency => currency.name === environment.currency)[0]
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkPrice()
  }

  ngOnInit(): void {
    this.checkPrice()
  }

  private checkPrice(): void {
    if (this.isInvalidPrice()) {
      this.correctPrice()
    }
  }

  private isInvalidPrice(): boolean {
    return this.gamePrice != `${this.currency.symbol} ${this.gamePrice}`;
  }

  private correctPrice(): void {
    const value : string = this.gamePrice.replace(/[^0-9,.]/g, "");
    this.gamePrice = `${this.currency.symbol} ${value}`
  }
}
