import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ServiceType} from "../../../../../interfaces/service-type";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceTypeService} from "../../../../../services/service-type.service";
import {UiService} from "../../../../../services/ui.service";
import {UtilsService} from "../../../../../services/utils.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-add-service-type',
  templateUrl: './add-service-type.component.html',
  styleUrls: ['./add-service-type.component.scss']
})
export class AddServiceTypeComponent implements OnInit, OnDestroy {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm: FormGroup;
  isLoading = false;
  // Store Data from param
  id?: string;
  serviceType: ServiceType;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private serviceTypeService: ServiceTypeService,
    private uiService: UiService,
    private utilsService: UtilsService,
    public router: Router,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      title: [null, Validators.required],
      icon: [null, Validators.required],
      color: [null, Validators.required]
    });

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getServiceTypeByServiceTypeID();
      }
    });

  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.serviceType) {
      const finalData = {...this.dataForm.value, ...{_id: this.serviceType._id}};
      this.editServiceTypeData(finalData);
    } else {
      this.addServiceType(this.dataForm.value);
    }
  }



  /**
   * SET FORM DATA
   */
  private setFormData() {
    this.dataForm.patchValue(this.serviceType);
  }

  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */


  private addServiceType(data: ServiceType) {
    this.spinner.show();
    this.serviceTypeService.addServiceType(data)
      .subscribe(res => {
        this.spinner.hide();
        this.uiService.success(res.message);
        this.templateForm.resetForm();
      }, error => {
        this.spinner.hide();
      });
  }

  private getServiceTypeByServiceTypeID() {
    this.serviceTypeService.getServiceTypeByServiceTypeID(this.id)
      .subscribe(res => {
        this.serviceType = res.data;
        if (this.serviceType) {
          this.setFormData();
        }
      }, error => {
        console.log(error);
      });
  }

  private editServiceTypeData(data: ServiceType) {
    this.spinner.show();
    this.serviceTypeService.editServiceTypeData(data)
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
