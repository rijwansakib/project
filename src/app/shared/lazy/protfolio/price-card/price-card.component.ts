import { Component, Input, OnInit } from '@angular/core';
import {PriceCardInfo} from "../../../../interfaces/profolio/price-card-info";

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent implements OnInit {

  @Input() priceData?:PriceCardInfo;
  bg = true;

  constructor() { }

  ngOnInit(): void {
  }

}
