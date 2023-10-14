import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing-console-info',
  templateUrl: './card-pricing-console-info.component.html',
  styleUrls: ['./card-pricing-console-info.component.css']
})
export class CardPricingConsoleInfoComponent implements OnInit, OnDestroy {
  @Input() gameInfo : string[] = [""]
  protected firstInfo : string = ""

  constructor() { }

  ngOnDestroy(): void {
    this.gameInfo.unshift(this.firstInfo)
  }

  ngOnInit(): void {
    this.firstInfo = this.gameInfo.shift() || ""
  }



}
