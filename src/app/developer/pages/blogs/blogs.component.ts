import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Blog} from "../../../interfaces/blog";
import {MatDialog} from "@angular/material/dialog";
import {BlogService} from "../../../services/blog.service";
import {UiService} from "../../../services/ui.service";
import {ReloadService} from "../../../services/reload.service";
import {NgxSpinnerService} from "ngx-spinner";
import {UtilsService} from "../../../services/utils.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmDialogComponent} from "../../../shared/components/ui/confirm-dialog/confirm-dialog.component";
import {Pagination} from "../../../interfaces/pagination";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  // Subscriptions
  private subAcRoute: Subscription;

  // DOWNLOADABLE
  dataTypeFormat = 'json';

  allBlogs: Blog[] = [];

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 24;
  totalProductsStore = 0;

  constructor(
    private dialog: MatDialog,
    private blogService: BlogService,
    private uiService: UiService,
    private reloadService: ReloadService,
    private spinner: NgxSpinnerService,
    private utilsService: UtilsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.reloadService.refreshBlog$
      .subscribe(() => {
        this.getAllBlogs();
      });

    // GET PAGE FROM QUERY PARAM
    this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
      if (qParam && qParam.page) {
        this.currentPage = qParam.page;
      } else {
        this.currentPage = 1;
      }
      this.getAllBlogs();
    });
  }

  /**
   * COMPONENT DIALOG VIEW
   */
  public openConfirmDialog(data?: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want delete this category?'
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.deleteBlog(data);
      }
    });
  }

  /**
   * HTTP REQ HANDLE
   */

  private getAllBlogs() {
    const pagination: Pagination = {
      pageSize: this.productsPerPage.toString(),
      currentPage: this.currentPage.toString()
    };

    const sort = {createdAt: -1};
    this.blogService.getAllBlogs(pagination, sort, null, null)
      .subscribe(res => {
        this.allBlogs = res.data;
      }, error => {
        console.log(error);
      });
  }

  /**
   * DELETE METHOD HERE
   */
  private deleteBlog(id: string) {
    this.blogService.deleteBlog(id)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.reloadService.needRefreshBlog$();
      }, error => {
        console.log(error);
      });
  }

  /**
   * ON DESTROY
   */
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
  }
}
