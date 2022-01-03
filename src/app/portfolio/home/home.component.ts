import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {PortfolioService} from "../../services/portfolio.service";
import {Subscription} from "rxjs";
import {Portfolio} from "../../interfaces/portfolio";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

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
    const select = 'name introBio introImage email phoneNo'
    this.subDataOne = this.portfolioService.getPortfolioByUserId(this.userId, select)
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
