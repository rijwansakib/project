import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-tags',
  templateUrl: './category-tags.component.html',
  styleUrls: ['./category-tags.component.scss']
})
export class CategoryTagsComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
