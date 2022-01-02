import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { AddServiceComponent } from './services/add-service/add-service.component';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';
import { AddWorkComponent } from './works/add-work/add-work.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {MaterialModule} from "../../../material/material.module";
import {NgxSpinnerModule} from "ngx-spinner";
import {PipesModule} from "../../../shared/pipes/pipes.module";
import {ImageGalleryDialogModule} from "../image-gallery-dialog/image-gallery-dialog.module";
import {DigitOnlyModule} from "@uiowa/digit-only";
import {NgxPaginationModule} from "ngx-pagination";
import { EducationsComponent } from './educations/educations.component';
import { AddEducationComponent } from './educations/add-education/add-education.component';


@NgModule({
  declarations: [
    IntroductionComponent,
    AboutComponent,
    ServicesComponent,
    ExperienceComponent,
    WorksComponent,
    ContactComponent,
    AddServiceComponent,
    AddExperienceComponent,
    AddWorkComponent,
    EducationsComponent,
    AddEducationComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ReactiveFormsModule,
    FlexModule,
    MaterialModule,
    NgxSpinnerModule,
    PipesModule,
    ImageGalleryDialogModule,
    DigitOnlyModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class PortfolioModule { }
