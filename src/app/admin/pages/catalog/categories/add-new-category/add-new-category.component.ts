import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UiService} from '../../../../../services/ui.service';
import {UtilsService} from '../../../../../services/utils.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ProductCategory} from "../../../../../interfaces/product-category";
import {CategoryService} from "../../../../../services/category.service";
import {
  ImageGalleryDialogComponent
} from "../../../../../developer/pages/image-gallery-dialog/image-gallery-dialog.component";
import {ImageGallery} from "../../../../../interfaces/image-gallery";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent implements OnInit, OnDestroy {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm: FormGroup;
  isLoading = false;
  // Store Data from param
  id?: string;
  category: ProductCategory;
  private sub: Subscription;

  // Image Holder
  placeholder = '/assets/images/avatar/user_low.png';
  pickedImage?: string;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private uiService: UiService,
    private utilsService: UtilsService,
    public router: Router,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      categoryName: [null, Validators.required],
      priority: [null],
      image: [null],
    });

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getProductCategoryByProductCategoryID();
      }
    });

    this.pickedImage = this.placeholder;

  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.category) {
      const finalData = {...this.dataForm.value, ...{_id: this.category._id}};
      this.editProductCategoryData(finalData);
    } else {
      this.addProductCategory(this.dataForm.value);
    }
  }


  /**
   * SET FORM DATA
   */
  private setFormData() {
    this.dataForm.patchValue(this.category);
    this.pickedImage = this.category.image ? this.category.image : this.placeholder;

  }

  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */


  private addProductCategory(data: ProductCategory) {
    this.spinner.show();
    this.categoryService.addProductCategory(data)
      .subscribe(res => {
        this.spinner.hide();
        this.uiService.success(res.message);
        this.templateForm.resetForm();
        this.pickedImage = this.placeholder;
      }, error => {
        this.spinner.hide();
      });
  }

  private getProductCategoryByProductCategoryID() {
    this.categoryService.getProductCategoryByProductCategoryID(this.id)
      .subscribe(res => {
        this.category = res.data;
        if (this.category) {
          this.setFormData();
        }
      }, error => {
        console.log(error);
      });
  }

  private editProductCategoryData(data: ProductCategory) {
    this.spinner.show();
    this.categoryService.editProductCategoryData(data)
      .subscribe(res => {
        this.uiService.success(res.message);
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
