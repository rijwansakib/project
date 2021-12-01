import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Select} from "../../interfaces/select";
import {COMMUNITIES} from "../../core/utils/app-data";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  dataForm: FormGroup;

  // Data
  communities: Select[] = COMMUNITIES;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  /***
   * Form Init
   */

  private initForm() {
    this.dataForm = this.fb.group({
      name: [null, Validators.required],
      userName: [null, Validators.required],
      email: [null, Validators.email],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      community: [null, Validators.required],
      agree: [false],
    });
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


    console.log(this.dataForm.value);

  }

}
