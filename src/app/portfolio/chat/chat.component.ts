import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";

export interface Chat {
  message: string;
  user: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent implements OnInit {

  userId: string;

  public chats: Chat[] = [];

  message: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {

    this.dataService.reloadChat$.subscribe(() => {
      this.chats = this.dataService.getChats();
    })

    this.activatedRoute.queryParams.subscribe(param => {
      if (param && param.user) {
        this.userId = param.user;
        this.chats = this.dataService.getChats();
      }
    });

    console.log(this.chats)
  }

  onSent() {
    console.log(this.message);
    const data = {
      message: this.message,
      user: this.userId
    }
    this.dataService.addChat(data);
    this.message = '';
  }
}
