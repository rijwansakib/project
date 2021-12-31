import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Portfolio} from "../../../../interfaces/portfolio";
import {UiService} from "../../../../services/ui.service";
import {NgxSpinnerService} from "ngx-spinner";
import {MatDialog} from "@angular/material/dialog";
import {PortfolioService} from "../../../../services/portfolio.service";
import {ImageGalleryDialogComponent} from "../../image-gallery-dialog/image-gallery-dialog.component";
import {ImageGallery} from "../../../../interfaces/image-gallery";
import {Select} from "../../../../interfaces/select";
import {COUNTRIES} from "../../../../core/utils/app-data";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  // Subscriptions
  subDataOne: Subscription = null;

  // Form Variable
  @ViewChild('templateForm') templateForm: NgForm;
  dataForm?: FormGroup;


  isLoading = false;

  // Image Holder
  placeholder = '/assets/images/avatar/user_low.png';
  pickedImage?: string;

  // Data
  portfolio: Portfolio = null;

  // Static
  countries: Select[] = COUNTRIES;


  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private portfolioService: PortfolioService,
  ) {
  }

  ngOnInit(): void {
    // INIT FORM
    this.initFormGroup();

    // Get Data
    this.getPortfolioByUser();
  }

  /**
   * INIT FORM
   */
  private initFormGroup() {
    this.dataForm = this.fb.group({
      bio: [null, Validators.required],
      age: [null, Validators.required],
      residence: [null],
      email: [null],
      phoneNo: [null],
      aboutImage: [null],
      cvLink: [null],
    });


    this.pickedImage = this.placeholder;

  }

  /**
   * SET FORM DATA
   */
  private setData() {
    this.dataForm.patchValue(this.portfolio);
    this.pickedImage = this.portfolio.aboutImage ? this.portfolio.aboutImage : this.placeholder;
  }

  /**
   * ON SUBMIT
   */

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }

    this.addPortfolio(this.dataForm.value);

  }




  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */

  private addPortfolio(data: Portfolio) {
    this.spinner.show();
    this.portfolioService.addPortfolio(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        console.log(err);
      });
  }


  private getPortfolioByUser() {
    this.spinner.show();
    const select = 'bio age residence email phoneNo aboutImage cvLink'
    this.subDataOne = this.portfolioService.getPortfolioByUser(select)
      .subscribe(res => {
        this.spinner.hide();
        this.portfolio = res.data;
        if (this.portfolio) {
          this.setData();
        }
      }, err => {
        this.spinner.hide();
        console.log(err);
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
            {aboutImage: images[0].url}
          );
          this.pickedImage = images[0].url;
        }
      }
    });
  }


  ngOnDestroy() {
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }
}
