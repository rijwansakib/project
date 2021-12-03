import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUsersRoutingModule } from './app-users-routing.module';
import { AppUsersComponent } from './app-users.component';
import { DevelopersComponent } from './developers/developers.component';
import { RequestDevelopersComponent } from './request-developers/request-developers.component';
import {MaterialModule} from "../../../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {NgxSpinnerModule} from "ngx-spinner";
import { EditAppUserComponent } from './edit-app-user/edit-app-user.component';
import { AppUserDetailsComponent } from './app-user-details/app-user-details.component';


@NgModule({
  declarations: [
    AppUsersComponent,
    DevelopersComponent,
    RequestDevelopersComponent,
    EditAppUserComponent,
    AppUserDetailsComponent
  ],
  imports: [
    CommonModule,
    AppUsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AppUsersModule { }
