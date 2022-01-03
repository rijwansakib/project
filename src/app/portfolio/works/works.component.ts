import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkCardInfo} from "../../interfaces/profolio/work-card-info";
import {Subscription} from "rxjs";
import {Portfolio} from "../../interfaces/portfolio";
import {ActivatedRoute} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {PortfolioService} from "../../services/portfolio.service";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  /*** workData */
  workDataArray:WorkCardInfo[]=[
    {
      _id:'1',
      workBadge:'Image',
      workImg:"/assets/images/works/work-1.png",
      workCategori:"Desgin",
      workTitle:"Food Recipe App"
    },
    {
      _id:'2',
      workBadge:'Detailed',
      workImg:"/assets/images/works/work-2.png",
      workCategori:"Branding, Development",
      workTitle:"Task Managment Mockup"
    },
    {
      _id:'3',
      workBadge:'Video',
      workImg:"/assets/images/works/work-3.png",
      workCategori:"Advertisement",
      workTitle:"iPhone 12 Clay Mockup"
    },
    {
      _id:'4',
      workBadge:'Audio',
      workImg:"/assets/images/works/work-4.png",
      workCategori:"Desgin",
      workTitle:"Creative Dashboard"
    }, {
      _id:'5',
      workBadge:'Gallery',
      workImg:"/assets/images/works/work-5.png",
      workCategori:"Development",
      workTitle:"Food Delivery App"
    }, {
      _id:'6',
      workBadge:'Link',
      workImg:"/assets/images/works/work-6.png",
      workCategori:"Design, Branding",
      workTitle:"Perfume Product Page"
    }
  ]
}
