import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ServiceType} from "../../../../../interfaces/service-type";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {UiService} from "../../../../../services/ui.service";
import {UtilsService} from "../../../../../services/utils.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ExperienceTypeService} from "../../../../../services/experience-type.service";
import {ExperienceType} from "../../../../../interfaces/experience-type";

@Component({
  selector: 'app-add-experience-type',
  templateUrl: './add-experience-type.component.html',
  styleUrls: ['./add-experience-type.component.scss']
})
export class AddExperienceTypeComponent implements OnInit, OnDestroy {
// Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm: FormGroup;
  isLoading = false;
  // Store Data from param
  id?: string;
  experienceType: ExperienceType;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private experienceTypeService: ExperienceTypeService,
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
        this.getExperienceTypeByExperienceTypeID();
      }
    });

  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.experienceType) {
      const finalData = {...this.dataForm.value, ...{_id: this.experienceType._id}};
      this.editExperienceTypeData(finalData);
    } else {
      this.addExperienceType(this.dataForm.value);
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
    this.dataForm.patchValue(this.experienceType);
  }

  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */


  private addExperienceType(data: ServiceType) {
    this.spinner.show();
    this.experienceTypeService.addExperienceType(data)
      .subscribe(res => {
        this.spinner.hide();
        this.uiService.success(res.message);
        this.templateForm.resetForm();
      }, error => {
        this.spinner.hide();
      });
  }

  private getExperienceTypeByExperienceTypeID() {
    this.experienceTypeService.getExperienceTypeByExperienceTypeID(this.id)
      .subscribe(res => {
        this.experienceType = res.data;
        if (this.experienceType) {
          this.setFormData();
        }
      }, error => {
        console.log(error);
      });
  }

  private editExperienceTypeData(data: ServiceType) {
    this.spinner.show();
    this.experienceTypeService.editExperienceTypeData(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

}
