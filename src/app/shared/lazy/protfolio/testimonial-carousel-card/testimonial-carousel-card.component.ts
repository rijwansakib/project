import { Component, Input, OnInit } from '@angular/core';
import {TestimonialMemberCarouselCardInfo} from "../../../../interfaces/profolio/testimonial-member-carousel-card-info";

@Component({
  selector: 'app-testimonial-carousel-card',
  templateUrl: './testimonial-carousel-card.component.html',
  styleUrls: ['./testimonial-carousel-card.component.scss']
})
export class TestimonialCarouselCardComponent implements OnInit {

  @Input() testimonialMemberData?:TestimonialMemberCarouselCardInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
