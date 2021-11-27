import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../../interfaces/blog";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() data: Blog;

  constructor() { }

  ngOnInit(): void {
  }

}
