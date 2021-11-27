import { Component, Input, OnInit } from '@angular/core';
import {SkillsInfo} from "../../../../interfaces/profolio/skills-info";

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.scss']
})
export class SkillDetailsComponent implements OnInit {
  @Input() skillData?:SkillsInfo;
  skill = true;
  constructor() { }

  ngOnInit(): void {
  }

}
