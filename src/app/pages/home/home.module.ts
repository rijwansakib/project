import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FeatureBlogCardModule} from "../../shared/lazy/feature-blog-card/feature-blog-card.module";
import {BlogCardModule} from "../../shared/lazy/blog-card/blog-card.module";
import {CategoryTagsModule} from "../../shared/category-tags/category-tags.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FeatureBlogCardModule,
        BlogCardModule,
        CategoryTagsModule
    ]
})
export class HomeModule { }
