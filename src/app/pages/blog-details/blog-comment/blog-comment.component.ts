import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UiService} from "../../../services/ui.service";
import {UserService} from "../../../services/user.service";
import {UserDataService} from "../../../services/user-data.service";
import {ReloadService} from "../../../services/reload.service";
import {UtilsService} from "../../../services/utils.service";
import {CommentService} from "../../../services/comment.service";

@Component({
  selector: 'app-blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.scss']
})
export class BlogCommentComponent implements OnInit {

  // Rating
  @Input() pageUrl: string = null;
  @Input() blogId: string = null;
  @Input() rating = 0;
  @ViewChild('formElement') formElRef: NgForm;


  constructor(
    private uiService: UiService,
    public userService: UserService,
    public userDataService: UserDataService,
    public reloadService: ReloadService,
    public utilsService: UtilsService,
    public commentService: CommentService,
  ) {
  }

  ngOnInit(): void {
  }


  onRatingChanged(rating) {
    this.rating = rating;
  }

  /**
   * ON SUBMIT
   */
  onSubmitReview(formData: NgForm) {
    if (formData.invalid) {
      this.uiService.warn('Please write your comment');
      return;
    }

    const data: Comment = {
      // @ts-ignore
      user: undefined,
      comment: formData.value.text,
      votes: this.rating,
      commentDate: this.utilsService.getDateString(new Date()),
      blog: this.blogId,
      status: false,
      replyDate: null,
      reply: null
    };

    this.addReview(data);
  }

  /**
   * RESET
   */
  private reset() {
    this.rating = 0;
    this.formElRef.resetForm();
  }

  /**
   * HTTP REQ HANDLE
   */

  private addReview(review: any) {
    this.commentService.addComment(review)
      .subscribe(res => {
        this.uiService.success('Your comment is under review');
        this.reloadService.needRefreshComment$();
        this.reset();
      }, error => {
        console.log(error);
      });
  }


}
