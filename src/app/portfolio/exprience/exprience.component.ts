import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Portfolio} from "../../interfaces/portfolio";
import {ActivatedRoute} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {PortfolioService} from "../../services/portfolio.service";

@Component({
  selector: 'app-exprience',
  templateUrl: './exprience.component.html',
  styleUrls: ['./exprience.component.scss']
})
export class ExprienceComponent implements OnInit, OnDestroy {

// Subscriptions
  subDataOne: Subscription = null;
  userId: string;

  // Data
  portfolio: Portfolio = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private portfolioService: PortfolioService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(param => {
      if (param && param.user) {
        this.userId = param.user;
        // Get Data
        this.getPortfolioByUser();
      }
    });
  }

  ngOnDestroy() {
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }

  /**
   * HTTP REQ HANDLE
   */

  private getPortfolioByUser() {
    this.spinner.show();
    const select = 'experiences -_id'
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

}
