import {Component, Input, OnInit} from '@angular/core';
import {BlogCardInfo} from "../../../../interfaces/profolio/blog-card-info";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() blogData?: BlogCardInfo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
