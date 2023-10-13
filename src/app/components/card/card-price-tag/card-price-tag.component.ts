import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price-tag',
  templateUrl: './card-price-tag.component.html',
  styleUrls: ['./card-price-tag.component.css']
})
export class CardPriceTagComponent implements OnInit {

  @Input() gameType : string = ""
  @Input() gamePrice : string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
