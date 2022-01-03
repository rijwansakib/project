import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Chat} from "../../../portfolio/chat/chat.component";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  userId: string = 'developer';

  public chats: Chat[] = [];

  message: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.reloadChat$.subscribe(() => {
      this.chats = this.dataService.getChats();
      console.log('Here')
    })

    this.chats = this.dataService.getChats();

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
