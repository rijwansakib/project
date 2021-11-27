import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {BlogCardModule} from "../../shared/lazy/protfolio/blog-card/blog-card.module";


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    BlogCardModule
  ]
})
export class BlogModule { }
