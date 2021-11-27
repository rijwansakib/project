import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBlogCardComponent } from './feature-blog-card.component';



@NgModule({
  declarations: [
    FeatureBlogCardComponent
  ],
  exports: [
    FeatureBlogCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureBlogCardModule { }
