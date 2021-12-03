import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card.component';
import {DirectivesModule} from "../../directives/directives.module";
import {PipesModule} from "../../pipes/pipes.module";



@NgModule({
  declarations: [
    BlogCardComponent
  ],
  exports: [
    BlogCardComponent
  ],
    imports: [
        CommonModule,
        DirectivesModule,
        PipesModule
    ]
})
export class BlogCardModule { }
