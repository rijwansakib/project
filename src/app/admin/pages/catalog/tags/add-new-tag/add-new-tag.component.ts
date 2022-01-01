import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UiService} from '../../../../../services/ui.service';
import {UtilsService} from '../../../../../services/utils.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Tag} from "../../../../../interfaces/tag";
import {TagService} from "../../../../../services/tag.service";

@Component({
  selector: 'app-add-new-tag',
  templateUrl: './add-new-tag.component.html',
  styleUrls: ['./add-new-tag.component.scss']
})
export class AddNewTagComponent implements OnInit {


  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;

  dataForm: FormGroup;
  isLoading = false;
  // Store Data from param
  id?: string;
  tag: Tag;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private tagService: TagService,
    private uiService: UiService,
    private utilsService: UtilsService,
    public router: Router,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      tagName: [null, Validators.required]
    });

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getTagByTagID();
      }
    });

  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.tag) {
      const finalData = {...this.dataForm.value, ...{_id: this.tag._id}};
      this.editTagData(finalData);
    } else {
      this.addTag(this.dataForm.value);
    }
  }


  /**
   * SET FORM DATA
   */
  private setFormData() {
    this.dataForm.patchValue(this.tag);
  }

  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */


  private addTag(data: Tag) {
    this.spinner.show();
    this.tagService.addTag(data)
      .subscribe(res => {
        this.spinner.hide();
        this.uiService.success(res.message);
        this.templateForm.resetForm();
      }, error => {
        this.spinner.hide();
      });
  }

  private getTagByTagID() {
    this.tagService.getTagByTagID(this.id)
      .subscribe(res => {
        this.tag = res.data;
        if (this.tag) {
          this.setFormData();
        }
      }, error => {
        console.log(error);
      });
  }

  private editTagData(data: Tag) {
    this.spinner.show();
    this.tagService.editTagData(data)
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
