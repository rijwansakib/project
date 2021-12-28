import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersComponent } from './developers.component';
import {DeveloperProfileCardModule} from "../../shared/lazy/developer-profile-card/developer-profile-card.module";
import {MaterialModule} from "../../material/material.module";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    DevelopersComponent
  ],
  imports: [
    CommonModule,
    DevelopersRoutingModule,
    DeveloperProfileCardModule,
    MaterialModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ]
})
export class DevelopersModule { }
