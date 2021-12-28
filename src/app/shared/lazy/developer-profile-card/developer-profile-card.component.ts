import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-developer-profile-card',
  templateUrl: './developer-profile-card.component.html',
  styleUrls: ['./developer-profile-card.component.scss']
})
export class DeveloperProfileCardComponent implements OnInit {

  @Input() data: User;

  constructor() { }

  ngOnInit(): void {
  }

}
