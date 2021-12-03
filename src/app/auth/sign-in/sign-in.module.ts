import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from "../../material/material.module";
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [
    SignInComponent
  ],
    imports: [
        CommonModule,
        SignInRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        NgxSpinnerModule
    ]
})
export class SignInModule { }
