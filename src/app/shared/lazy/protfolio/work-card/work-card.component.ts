import { Component, Input, OnInit } from '@angular/core';
import {WorkCardInfo} from "../../../../interfaces/profolio/work-card-info";

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {
  @Input() workData?:WorkCardInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
