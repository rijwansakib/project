import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UiService} from "../../../../services/ui.service";
import {NgxSpinnerService} from "ngx-spinner";
import {MatDialog} from "@angular/material/dialog";
import {ImageGalleryDialogComponent} from "../../image-gallery-dialog/image-gallery-dialog.component";
import {ImageGallery} from "../../../../interfaces/image-gallery";
import {PortfolioService} from "../../../../services/portfolio.service";
import {Portfolio} from "../../../../interfaces/portfolio";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit, OnDestroy {
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
      name: [null, Validators.required],
      introBio: [null, Validators.required],
      introImage: [null]
    });


    this.pickedImage = this.placeholder;

  }

  /**
   * SET FORM DATA
   */
  private setData() {
    this.dataForm.patchValue(this.portfolio);
    this.pickedImage = this.portfolio.introImage ? this.portfolio.introImage : this.placeholder;  }

  /**
   * ON SUBMIT
   */

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }

    if (!this.dataForm.value.introImage) {
      this.uiService.warn('Please add an Image 200 * 400');
      return;
    }

    this.addPortfolio(this.dataForm.value);

  }




  /**
   * HTTP REQ HANDLE
   */

  private addPortfolio(data: Portfolio) {
    this.spinner.show();
    this.portfolioService.addPortfolioBasic(data)
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
    const select = 'name introBio introImage'
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
            {introImage: images[0].url}
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
