import { Component, OnInit } from '@angular/core';
import {Blog} from "../../interfaces/blog";
import {BlogService} from "../../services/blog.service";
import {Pagination} from "../../interfaces/pagination";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {


  allBlogs: Blog[] = [];

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 9;
  totalProductsStore = 0;

  constructor(
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.getAllBlogs();
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

        console.log(res)
        this.allBlogs = res.data;
      }, error => {
        console.log(error);
      });
  }

}
