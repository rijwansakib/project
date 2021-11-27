import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExprienceRoutingModule } from './exprience-routing.module';
import { ExprienceComponent } from './exprience.component';
import {ResumeCardModule} from "../../shared/lazy/protfolio/resume-card/resume-card.module";


@NgModule({
  declarations: [
    ExprienceComponent
  ],
  imports: [
    CommonModule,
    ExprienceRoutingModule,
    ResumeCardModule
  ]
})
export class ExprienceModule { }
