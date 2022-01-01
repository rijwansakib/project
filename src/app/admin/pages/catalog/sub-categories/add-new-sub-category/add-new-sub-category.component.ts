import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UiService} from '../../../../../services/ui.service';
import {UtilsService} from '../../../../../services/utils.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ProductSubCategory} from "../../../../../interfaces/product-sub-category";
import {SubCategoryService} from "../../../../../services/sub-category.service";
import {ProductCategory} from "../../../../../interfaces/product-category";
import {CategoryService} from "../../../../../services/category.service";

@Component({
  selector: 'app-add-new-sub-category',
  templateUrl: './add-new-sub-category.component.html',
  styleUrls: ['./add-new-sub-category.component.scss']
})
export class AddNewSubCategoryComponent implements OnInit {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm: FormGroup;
  isLoading = false;
  // Store Data from param
  id?: string;
  categories: ProductCategory[] = [];
  subCategory: ProductSubCategory;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private uiService: UiService,
    private utilsService: UtilsService,
    public router: Router,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      category: [null, Validators.required],
      subCategoryName: [null, Validators.required],
    });

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getSubCategoryBySubCategoryID();
      }
    });

    // GET ALL SELECTED DATA
    this.getAllCategory();

  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.subCategory) {
      const finalData = {...this.dataForm.value, ...{_id: this.subCategory._id}};
      this.editTagData(finalData);
    } else {
      this.addSubCategory(this.dataForm.value);
    }
  }


  /**
   * SET FORM DATA
   */
  private setFormData() {
    this.dataForm.patchValue(this.subCategory);
  }

  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */

  private getAllCategory() {
    this.categoryService.getAllCategories()
      .subscribe(res => {
        this.categories = res.data;
      }, error => {
        console.log(error);
      });
  }

  private addSubCategory(data: ProductSubCategory) {
    this.spinner.show();
    this.subCategoryService.addSubCategory(data)
      .subscribe(res => {
        this.spinner.hide();
        this.uiService.success(res.message);
        this.templateForm.resetForm();
      }, error => {
        this.spinner.hide();
      });
  }

  private getSubCategoryBySubCategoryID() {
    this.subCategoryService.getSubCategoryBySubCategoryID(this.id)
      .subscribe(res => {
        this.subCategory = res.data;
        if (this.subCategory) {
          this.setFormData();
        }
      }, error => {
        console.log(error);
      });
  }

  private editTagData(data: ProductSubCategory) {
    this.spinner.show();
    this.subCategoryService.editSubCategoryData(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
