import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCarouselCardComponent } from './testimonial-carousel-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TestimonialCarouselCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TestimonialCarouselCardComponent
  ]
})
export class TestimonialCarouselCardModule { }
