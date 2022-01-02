import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Blog} from "../../interfaces/blog";
import {BlogService} from "../../services/blog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../interfaces/comment";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {


  // Subscription
  subDataFour: Subscription;

  blogSlug: string = null;
  blog: Blog;
  allComments: Comment[] = [];



  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private commentService: CommentService,
    public router: Router,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(param => {
      this.blogSlug = param.get('slug');
      this.getSingleBlogBySlug();
    });

  }

  /**
   * HTTP REQ HANDLE
   */

  private getSingleBlogBySlug() {
    this.spinner.show();
    this.blogService.getSingleBlogBySlug(this.blogSlug)
      .subscribe(res => {
        this.blog = res.data;
        this.getAllReviewsByQuery();
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }

  private getAllReviewsByQuery() {
    const query = {
      blog: this.blog._id,
      status: true
    };
    this.subDataFour = this.commentService.getAllCommentsByQuery(null, null, query)
      .subscribe(res => {
        this.allComments = res.data;
      }, error => {
        console.log(error);
      });
  }
}
