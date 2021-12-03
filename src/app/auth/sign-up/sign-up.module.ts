import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from "../../material/material.module";
import {MatSelectFilterModule} from "mat-select-filter";
import { DeveloperComponent } from './developer/developer.component';


@NgModule({
  declarations: [
    SignUpComponent,
    DeveloperComponent
  ],
    imports: [
        CommonModule,
        SignUpRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        MatSelectFilterModule
    ]
})
export class SignUpModule { }
