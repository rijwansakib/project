import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";
import {ReloadService} from "../../services/reload.service";
import {UserDataService} from "../../services/user-data.service";
import {Pagination} from "../../interfaces/pagination";
import {UserTypeEnum} from "../../enum/user-type.enum";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 5;
  totalProductsStore = 0;

  customers: User[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: UserDataService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    // GET PAGE FROM QUERY PARAM
    this.activatedRoute.queryParams.subscribe(qParam => {
      if (qParam && qParam.page) {
        this.currentPage = qParam.page;
      } else {
        this.currentPage = 1;
      }
      this.getCustomerList();
    });
  }

  /**
   * HTTP REQ HANDLE
   */

  private getCustomerList() {
    this.spinner.show();

    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    // let mQuery;
    const baseQuery = {userType: UserTypeEnum.DEVELOPER};

    this.customerService.getCustomerLists(pagination, baseQuery)
      .subscribe(res => {
        this.spinner.hide();
        this.customers = res.data;
        // this.holdPrevData = res.data;
        this.totalProducts = res.count;
        this.totalProductsStore = res.count;
        window.scrollTo(0, 0);
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: any) {
    this.router.navigate([], {queryParams: {page: event}});
  }



}
