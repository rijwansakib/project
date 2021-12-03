import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterDataRoutingModule } from './footer-data-routing.module';
import { FooterDataComponent } from './footer-data.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {MaterialModule} from '../../../material/material.module';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [
    FooterDataComponent
  ],
  imports: [
    CommonModule,
    FooterDataRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    AngularEditorModule,
    NgxSpinnerModule
  ]
})
export class FooterDataModule { }
