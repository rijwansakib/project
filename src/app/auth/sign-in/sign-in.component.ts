import {FormBuilder, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgxSpinnerService} from "ngx-spinner";
import {UtilsService} from "../../services/utils.service";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  dataForm: any;

  constructor(
    public userService: UserService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
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
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  /**
   * ON SUbMit Method
   */
  onSubmitForm() {

    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all th required field');
      return;
    }

    if (this.dataForm.value.password.length < 6) {
      this.uiService.warn('Password must be at lest 6 characters!');
      return;
    }

    this.spinner.show();
    this.userService.userLogin(this.dataForm.value);

  }

}
