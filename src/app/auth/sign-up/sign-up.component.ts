import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  dataForm: FormGroup;

  constructor(
    private fb: FormBuilder
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
      password: [null, Validators.required]
    });
  }

  /**
   * ON SUbMit Method
   */
  onSubmit() {
    if (this.dataForm.invalid) {
      alert('Please Enter Your Valid Information');
    } else {
      console.log(this.dataForm.value);
    }

  }

}
