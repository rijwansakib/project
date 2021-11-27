import { Component, Input, OnInit } from '@angular/core';
import {ServiceCardInfo} from "../../../../interfaces/profolio/service-card-info";

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() cardData?:ServiceCardInfo;

  service = true;

  constructor() { }

  ngOnInit(): void {
  }

}
