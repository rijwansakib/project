import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditBasicInfoComponent} from './edit-basic-info.component';
import {MaterialModule} from '../../../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    EditBasicInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    EditBasicInfoComponent
  ]
})
export class EditBasicInfoModule {
}
