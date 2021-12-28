import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import {BlogCardModule} from "../../shared/lazy/blog-card/blog-card.module";


@NgModule({
  declarations: [
    BlogsComponent
  ],
    imports: [
        CommonModule,
        BlogsRoutingModule,
        BlogCardModule
    ]
})
export class BlogsModule { }
