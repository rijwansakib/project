import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {AccountComponent} from './account.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ImageCropComponent} from "./image-crop/image-crop.component";
import {MaterialModule} from "../../material/material.module";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {PipesModule} from "../../shared/pipes/pipes.module";
import {ImageCropperModule} from "ngx-image-cropper";
import {DigitOnlyModule} from "@uiowa/digit-only";
import {EditBasicInfoModule} from "../../shared/dialog-view/edit-basic-info/edit-basic-info.module";

@NgModule({
  declarations: [
    AccountComponent,
    BasicInfoComponent,
    ChangePasswordComponent,
    ImageCropComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    SharedModule,
    EditBasicInfoModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    PipesModule,
    ImageCropperModule,
    FormsModule,
    DigitOnlyModule,
  ]
})
export class AccountModule {
}
