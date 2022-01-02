import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ServiceType} from "../../../../../interfaces/service-type";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceTypeService} from "../../../../../services/service-type.service";
import {UiService} from "../../../../../services/ui.service";
import {UtilsService} from "../../../../../services/utils.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Pagination} from "../../../../../interfaces/pagination";
import {Service} from "../../../../../interfaces/portfolio";
import {PortfolioService} from "../../../../../services/portfolio.service";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {


  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm: FormGroup;
  isLoading = false;
  // Store Data from param
  serviceTypes: ServiceType[] = [];
  id?: string;
  service: Service;

  // Subscription
  private sub: Subscription;
  private subDataOne: Subscription;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private serviceTypeService: ServiceTypeService,
    private portfolioService: PortfolioService,
    private uiService: UiService,
    private utilsService: UtilsService,
    public router: Router,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      serviceType: [null, Validators.required],
      description: [null, Validators.required]
    });

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getServiceTypeByServiceTypeID();
      }
    });

    this.getAllServiceTypes();

  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.service) {
      const finalData = {...this.dataForm.value, ...{_id: this.service}};
      this.editServiceTypeData(finalData);
    } else {
      const finalData = {services: this.dataForm.value};
      this.addServiceType(finalData);
    }
  }



  /**
   * SET FORM DATA
   */
  private setFormData() {
    // this.dataForm.patchValue(this.serviceType);
  }

  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */
  private getAllServiceTypes() {
    this.spinner.show();
    this.subDataOne = this.serviceTypeService.getAllServiceTypes(null, null, null, null)
      .subscribe(res => {
        this.spinner.hide();
        this.serviceTypes = res.data;
      }, error => {
        this.spinner.hide();
        console.log(error);
      });
  }


  private addServiceType(data: any) {
    this.spinner.show();
    this.portfolioService.addPortfolioArray(data)
      .subscribe(res => {
        this.spinner.hide();
        if (res.success) {
          this.uiService.success(res.message);
          this.templateForm.resetForm();
        } else {
          this.uiService.warn(res.message);
        }
      }, error => {
        this.spinner.hide();
      });

    console.log(data);
  }

  private getServiceTypeByServiceTypeID() {
    this.serviceTypeService.getServiceTypeByServiceTypeID(this.id)
      .subscribe(res => {
        // this.serviceType = res.data;
        // if (this.serviceType) {
        //   this.setFormData();
        // }
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
