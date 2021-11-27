import {Component, OnInit} from '@angular/core';
import {CarouselControlService} from "../../services/carousel-control-service";
import {ServiceCardInfo} from "../../interfaces/profolio/service-card-info";
import {TestimonialMemberCarouselCardInfo} from "../../interfaces/profolio/testimonial-member-carousel-card-info";
import {PriceCardInfo} from "../../interfaces/profolio/price-card-info";
import {BrandLogo} from "../../interfaces/profolio/brand-logo";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    public carouselCntrlService: CarouselControlService
  ) {
  }

  ngOnInit(): void {
  }


  serviceArray: ServiceCardInfo[] = [
    {
      _id: '1',
      iconBg: 'rgb(230, 225, 255)',
      iconColor: "rgb(88, 72, 180)",
      serviceIcon: "fa fa-globe-asia",
      serviceTitle: "Web Development",
      serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      _id: '2',
      iconBg: 'rgb(255, 217, 201)',
      iconColor: "rgb(255, 101, 37)",
      serviceIcon: "fa fa-palette",
      serviceTitle: "UI & UX Design",
      serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      _id: '3',
      iconBg: 'rgb(197, 246, 255)',
      iconColor: "rgb(51, 194, 219)",
      serviceIcon: "fab fa-wordpress",
      serviceTitle: "WordPress",
      serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      _id: '4',
      iconBg: 'rgb(191, 240, 205)',
      iconColor: "rgb(73, 193, 108)",
      serviceIcon: "fa fa-camera-retro",
      serviceTitle: "Photograph",
      serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      _id: '5',
      iconBg: 'rgb(255, 213, 223)',
      iconColor: "rgb(255, 51, 102)",
      serviceIcon: "fab fa-instagram",
      serviceTitle: "Social Marketing",
      serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      _id: '1',
      iconBg: 'rgb(255, 239, 200)',
      iconColor: "rgb(255, 179, 0)",
      serviceIcon: "fa fa-chart-line",
      serviceTitle: "Advertising",
      serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },

  ]


  /*** testimonialMemberDataArray ****/
  testimonialMemberDataArray: TestimonialMemberCarouselCardInfo[] = [
    {
      _id: '1',
      memberImg: './assets/image/testimonial.png',
      memberName: 'Johne Doe',
      memberPosition: 'CEO of ThemeGer',
      memberDescription: '" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat ultrices metus sed luctus. Donec iaculis faucibus mauris vel tincidunt. Vestibulum sodales vel est sit amet lobortis. "'
    },
    {
      _id: '2',
      memberImg: './assets/image/bestu.jpg',
      memberName: 'Shamim Hossain',
      memberPosition: 'Web Designer Of SoftLab It',
      memberDescription: '" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat ultrices metus sed luctus. Donec iaculis faucibus mauris vel tincidunt. Vestibulum sodales vel est sit amet lobortis. "'
    },
    {
      _id: '3',
      memberImg: './assets/image/testimonial.png',
      memberName: 'Sahin alom',
      memberPosition: 'Manager of BaperHotel',
      memberDescription: '" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat ultrices metus sed luctus. Donec iaculis faucibus mauris vel tincidunt. Vestibulum sodales vel est sit amet lobortis. "'
    }
  ]
  /*** pricePlanData */
  pricePlanArray: PriceCardInfo[] = [
    {
      _id: '1',
      price: 29,
      packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      packageName: 'Personal',
      packageUpdateYear: '1 Years of Updates',
      packageLabeling: 'White Labeling',
      supportType: 'Regular Support',
      priceCardBg: '#fff'
    },
    {
      _id: '2',
      price: 49,
      packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      packageName: 'Business',
      packageUpdateYear: '2 Years of Updates',
      packageLabeling: 'White Labeling',
      supportType: 'Premium Support',
      priceCardBg: '#FFE3D7'
    },
    {
      _id: '3',
      price: 99,
      packageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      packageName: 'Enterprise',
      packageUpdateYear: 'Lifetime Updates',
      packageLabeling: 'White Labeling',
      supportType: 'Live Chat Support',
      priceCardBg: '#fff'
    }
  ]
  /**** brand-logo-data */
  brandLogoArray: BrandLogo[] = [
    {
      _id: "1",
      brandLogoImg: "./assets/image/1.png",
      brandLogoRouterLink: "#",
      brandName: '1.png'
    },
    {
      _id: "2",
      brandLogoImg: "./assets/image/2.png",
      brandLogoRouterLink: "#",
      brandName: '2.png'
    },
    {
      _id: "3",
      brandLogoImg: "./assets/image/3.png",
      brandLogoRouterLink: "#",
      brandName: '3.png'
    },
    {
      _id: "4",
      brandLogoImg: "./assets/image/4.png",
      brandLogoRouterLink: "#",
      brandName: '4.png'
    }
  ]


}
