import { Component, Input, OnInit } from '@angular/core';
import {ResumeCardInfo} from "../../../../interfaces/profolio/resume-card-info";

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss']
})
export class ResumeCardComponent implements OnInit {
  @Input() resumeCardData?:ResumeCardInfo;

  resumeColor = true;

  constructor() { }

  ngOnInit(): void {
  }

}
