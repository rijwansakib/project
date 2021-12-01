import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  dataForm:any;

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  /***
   * Form Init
   */
  private initForm(){
    this.dataForm = this.fb.group({
      userName:[null,Validators.required],
      password:[null,Validators.required]
    });
  }
/**
 * ON SUbMit Method
 */
 ngSubmit(){

  if(this.dataForm.invalid){
    alert('Please Enter Your Valid Information');
  }else{
    console.log(this.dataForm);
  }

 }

}
