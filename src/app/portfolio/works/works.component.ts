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
export class WorksComponent implements OnInit, OnDestroy {
// Subscriptions
  subDataOne: Subscription = null;
  userId: string;

  // Data
  portfolio: Portfolio = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private portfolioService: PortfolioService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      if (param && param.user) {
        this.userId = param.user;
        // Get Data
        this.getPortfolioByUser();
      }
    });
  }



  /**
   * HTTP REQ HANDLE
   */

  private getPortfolioByUser() {
    this.spinner.show();
    const select = 'works -_id'
    this.subDataOne = this.portfolioService.getPortfolioByUser(select)
      .subscribe(res => {
        this.spinner.hide();
        this.portfolio = res.data;
        console.log(this.portfolio)
      }, err => {
        this.spinner.hide();
        console.log(err);
      });
  }


  ngOnDestroy() {
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }
}
