import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {ServiceCardModule} from "../../shared/lazy/protfolio/service-card/service-card.module";
import {TestimonialCarouselCardModule} from "../../shared/lazy/protfolio/testimonial-carousel-card/testimonial-carousel-card.module";
import {PriceCardModule} from "../../shared/lazy/protfolio/price-card/price-card.module";


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ServiceCardModule,
    TestimonialCarouselCardModule,
    CarouselModule,
    PriceCardModule
  ]
})
export class ServicesModule { }
