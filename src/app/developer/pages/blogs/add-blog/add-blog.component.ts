import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Blog} from "../../../../interfaces/blog";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {ActivatedRoute, Router} from "@angular/router";
import {UiService} from "../../../../services/ui.service";
import {UtilsService} from "../../../../services/utils.service";
import {NgxSpinnerService} from "ngx-spinner";
import {BlogService} from "../../../../services/blog.service";
import {StorageService} from "../../../../services/storage.service";
import {UserDataService} from "../../../../services/user-data.service";
import {User} from "../../../../interfaces/user";
import {ProductSubCategory} from "../../../../interfaces/product-sub-category";
import {MatDialog} from "@angular/material/dialog";
import {ImageGalleryDialogComponent} from "../../image-gallery-dialog/image-gallery-dialog.component";
import {ImageGallery} from "../../../../interfaces/image-gallery";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm?: FormGroup;
  private sub: Subscription;

  autoSlug = true;
  isLoading = false;

  // Store Data from param
  id?: string;
  subCategories: ProductSubCategory[] = [];
  blog: Blog;

  // Image Holder
  placeholder = '/assets/images/avatar/image-upload.jpg';
  pickedImage?: string;


  editorConfigDesc: AngularEditorConfig = {
    editable: true,
    minHeight: '250px',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter/Copy product descriptions...',
    sanitize: false,
    toolbarPosition: 'top',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
  };

  // Destroy Session
  needSessionDestroy = true;

  constructor(
    private fb: FormBuilder,
    protected userDataService: UserDataService,
    private activatedRoute: ActivatedRoute,
    private uiService: UiService,
    private utilsService: UtilsService,
    private storageService: StorageService,
    public router: Router,
    private spinner: NgxSpinnerService,
    private blogService: BlogService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    // INIT FORM
    this.initFormGroup();

    // Main Data
    this.getLoggedInUserInfo();

    this.autoGenerateSlug();

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getBlogByBlogID();
      }
    });


  }

  /**
   * INIT FORM
   */
  private initFormGroup() {
    this.dataForm = this.fb.group({
      platform: [null, Validators.required],
      title: [null, Validators.required],
      slug: [null, Validators.required],
      shortDescription: [null, Validators.required],
      body: [null, Validators.required],
      image: [null],
    });

    this.pickedImage = this.placeholder;
  }

  /**
   * SET FORM DATA
   */
  private setFormData() {
    this.dataForm.patchValue(this.blog);
    this.pickedImage = this.blog.image ? this.blog.image : this.placeholder;
  }

  autoGenerateSlug() {
    if (this.autoSlug === true) {
      this.sub = this.dataForm.get('title').valueChanges
        .pipe(
        ).subscribe(d => {
          const res = d?.trim().replace(/[^A-Z0-9]+/ig, '-').toLowerCase();
          this.dataForm.patchValue({
            slug: res
          });
        });
    } else {
      if (this.sub === null || this.sub === undefined) {
        return;
      }
      this.sub.unsubscribe();
    }
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.blog) {
      const finalData = {...this.dataForm.value, ...{_id: this.blog._id}};
      this.editBlogData(finalData);
    } else {
      const finalData = {...this.dataForm.value, ...{votes: 0}}
      this.addBlog(finalData);
    }
  }


  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */

  private getLoggedInUserInfo() {
    const select = 'subCategory -_id';
    this.userDataService.getLoginUserPopulateData(select)
      .subscribe(res => {
        this.subCategories = res.data.subCategory as ProductSubCategory[];
        console.log(this.subCategories);
      }, error => {
        console.log(error);
      });
  }

  private addBlog(data: Blog) {
    this.spinner.show();
    this.blogService.addBlog(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.templateForm.resetForm();
        this.storageService.removeSessionData('BLOG_INPUT');
        this.pickedImage = this.placeholder;
        this.spinner.hide();
      }, error => {
        console.log(error);
      });
  }

  private getBlogByBlogID() {
    this.spinner.show();
    this.blogService.getBlogByBlogID(this.id)
      .subscribe(res => {
        this.blog = res.data;
        if (this.blog) {
          this.setFormData();
        }
        this.spinner.hide();
      }, error => {
        console.log(error);
      });
  }

  private editBlogData(data: Blog) {
    this.spinner.show();
    this.blogService.editBlogData(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.storageService.removeSessionData('BLOG_INPUT');
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  /**
   * OPEN COMPONENT DIALOG
   */

  public openComponentDialog() {
    const dialogRef = this.dialog.open(ImageGalleryDialogComponent, {
      panelClass: ['theme-dialog', 'full-screen-modal-lg'],
      width: '100%',
      minHeight: '100%',
      autoFocus: false,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        if (dialogResult.data && dialogResult.data.length > 0) {
          const images: ImageGallery[] = dialogResult.data
          this.dataForm.patchValue(
            {image: images[0].url}
          );
          this.pickedImage = images[0].url;
        }
      }
    });
  }


  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
