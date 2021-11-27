import { Component, Input, OnInit } from '@angular/core';
import {FunFactsCardDetails} from "../../../../interfaces/profolio/fun-facts-card-details";

@Component({
  selector: 'app-fun-facts-card',
  templateUrl: './fun-facts-card.component.html',
  styleUrls: ['./fun-facts-card.component.scss']
})
export class FunFactsCardComponent implements OnInit {
 @Input() funFactCardData?: FunFactsCardDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
