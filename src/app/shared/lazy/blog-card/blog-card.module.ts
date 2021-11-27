import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card.component';
import {DirectivesModule} from "../../directives/directives.module";



@NgModule({
  declarations: [
    BlogCardComponent
  ],
  exports: [
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ]
})
export class BlogCardModule { }
