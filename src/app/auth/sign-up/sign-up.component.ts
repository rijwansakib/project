import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Select} from "../../interfaces/select";
import {COMMUNITIES} from "../../core/utils/app-data";
import {UiService} from "../../services/ui.service";
import {ProductCategory} from "../../interfaces/product-category";
import {ProductSubCategory} from "../../interfaces/product-sub-category";
import {CategoryService} from "../../services/category.service";
import {SubCategoryService} from "../../services/sub-category.service";
import {MatSelectChange} from "@angular/material/select";
import {User} from "../../interfaces/user";
import {UserTypeEnum} from "../../enum/user-type.enum";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  dataForm: FormGroup;

  // Data
  communities: Select[] = COMMUNITIES;
  categories: ProductCategory[] = [];
  subCategories: ProductSubCategory[] = [];

  // Select Filter
  public filteredSubCatList: ProductSubCategory[];

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    // GET ALL SELECTED DATA
    this.getAllCategory();
  }

  /**
   * SELECTION CHANGE
   */

  onSelectCategory(event: MatSelectChange) {
    this.dataForm.patchValue({subCategory: null});
    this.getAllSubCategoryByCategoryId(event.value, true);
  }

  /**
   * ON SubMit Method
   */
  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please Enter Your Valid Information');
      return;
    }

    if (this.dataForm.value.password !== this.dataForm.value.confirmPassword) {
      this.uiService.warn('Password and confirm password not matched');
      return;
    }

    if (!this.dataForm.value.agree) {
      this.uiService.warn('Please accept all the terms & condition to continue.');
      return;
    }

    const user: User = {
      ...this.dataForm.value,
      ...{
        userType: UserTypeEnum.USER,
        phoneNo: null,
        registrationAs: UserTypeEnum.USER,
        isDeveloperAccess: false,
        profileImg: null,
        isPhoneVerified: false,
        isEmailVerified: false,
        registrationType: 'default',
        hasAccess: true,
      }
    }

    this.userService.userRegistration(user);


    console.log(user);

  }

  /***
   * Form Init
   */

  private initForm() {
    this.dataForm = this.fb.group({
      fullName: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.email],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      category: [null, Validators.required],
      subCategory: [null, Validators.required],
      agree: [false],
    });
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

  private getAllSubCategoryByCategoryId(categoryId: string, selectionChange: boolean) {
    this.subCategoryService.getSubCategoryByCategoryId(categoryId)
      .subscribe(res => {
        this.subCategories = res.data;
        this.filteredSubCatList = this.subCategories.slice();
      }, error => {
        console.log(error);
      });
  }

}
