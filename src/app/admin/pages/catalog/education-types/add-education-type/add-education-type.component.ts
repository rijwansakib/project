import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {UiService} from "../../../../../services/ui.service";
import {UtilsService} from "../../../../../services/utils.service";
import {NgxSpinnerService} from "ngx-spinner";
import {EducationType} from "../../../../../interfaces/education-type";
import {EducationTypeService} from "../../../../../services/education-type.service";

@Component({
  selector: 'app-add-education-type',
  templateUrl: './add-education-type.component.html',
  styleUrls: ['./add-education-type.component.scss']
})
export class AddEducationTypeComponent implements OnInit, OnDestroy {

// Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm: FormGroup;
  isLoading = false;
  // Store Data from param
  id?: string;
  educationType: EducationType;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private educationTypeService: EducationTypeService,
    private uiService: UiService,
    private utilsService: UtilsService,
    public router: Router,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      title: [null, Validators.required],
      color: [null, Validators.required]
    });

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getEducationTypeByEducationTypeID();
      }
    });

  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.educationType) {
      const finalData = {...this.dataForm.value, ...{_id: this.educationType._id}};
      this.editEducationTypeData(finalData);
    } else {
      this.addEducationType(this.dataForm.value);
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  /**
   * SET FORM DATA
   */
  private setFormData() {
    this.dataForm.patchValue(this.educationType);
  }

  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */


  private addEducationType(data: EducationType) {
    this.spinner.show();
    this.educationTypeService.addEducationType(data)
      .subscribe(res => {
        this.spinner.hide();
        this.uiService.success(res.message);
        this.templateForm.resetForm();
      }, error => {
        this.spinner.hide();
      });
  }

  private getEducationTypeByEducationTypeID() {
    this.educationTypeService.getEducationTypeByEducationTypeID(this.id)
      .subscribe(res => {
        this.educationType = res.data;
        if (this.educationType) {
          this.setFormData();
        }
      }, error => {
        console.log(error);
      });
  }

  private editEducationTypeData(data: EducationType) {
    this.spinner.show();
    this.educationTypeService.editEducationTypeData(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

}
