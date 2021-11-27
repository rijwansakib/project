import {Injectable} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ResponsiveSettings} from 'ngx-owl-carousel-o/lib/models/owl-options.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselControlService {

  constructor() {
  }

  getOwlCustomConfig(loop: boolean, autoPlay: boolean, responsive?: ResponsiveSettings, dots?: boolean) {
    const owlCustomOptions: OwlOptions = {
      loop: loop === null ? false : loop,
      autoplay: autoPlay === null ? false : autoPlay,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: dots ? dots : false,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      responsive: responsive ? responsive : {},
      nav: true,
      items: 1,
    };

    return owlCustomOptions;

  }


  /*** testiomonial-carousel */

  get testiMonialCarousel(): OwlOptions {
    return {
      loop: true,
      autoplay: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      // autoplaySpeed: 4000,
      smartSpeed: 2000,
      // navSpeed: 700,
      nav: true,
      items: 1
    };
  }

  /*** brand-logo-slide */
  get brandLogo(): OwlOptions {
    return {
      loop: true,
      autoplay: true,
      mouseDrag: true,
      touchDrag: true,
      margin: 10,
      pullDrag: false,
      dots: true,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      // autoplaySpeed: 4000,
      smartSpeed: 2000,
      // navSpeed: 700,
      nav: false,
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
        400: {
          items: 1,
          slideBy: 1
        },
        450: {
          items: 2,
          slideBy: 2
        },
        620: {
          items: 3,
          slideBy: 3
        },
        900: {
          items: 4,
          slideBy: 4
        }
      },
    };
  }


}
