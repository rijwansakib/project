import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ServiceTypesComponent } from './service-types/service-types.component';
import { AddServiceTypeComponent } from './service-types/add-service-type/add-service-type.component';
import { EducationTypesComponent } from './education-types/education-types.component';
import { AddEducationTypeComponent } from './education-types/add-education-type/add-education-type.component';
import { ExperienceTypesComponent } from './experience-types/experience-types.component';
import { AddExperienceTypeComponent } from './experience-types/add-experience-type/add-experience-type.component';
import {CategoriesComponent} from "./categories/categories.component";
import {AddNewCategoryComponent} from "./categories/add-new-category/add-new-category.component";
import {SubCategoriesComponent} from "./sub-categories/sub-categories.component";
import {AddNewSubCategoryComponent} from "./sub-categories/add-new-sub-category/add-new-sub-category.component";
import {TagsComponent} from "./tags/tags.component";
import {AddNewTagComponent} from "./tags/add-new-tag/add-new-tag.component";
import {MaterialModule} from "../../../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {PipesModule} from "../../../shared/pipes/pipes.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxSpinnerModule} from "ngx-spinner";
import {DownloadJsonDialogModule} from "../../../shared/dialog-view/download-json-dialog/download-json-dialog.module";
import {DirectivesModule} from "../../../shared/directives/directives.module";
import {DigitOnlyModule} from "@uiowa/digit-only";


@NgModule({
  declarations: [
    CategoriesComponent,
    AddNewCategoryComponent,
    SubCategoriesComponent,
    AddNewSubCategoryComponent,
    TagsComponent,
    AddNewTagComponent,
    ServiceTypesComponent,
    AddServiceTypeComponent,
    EducationTypesComponent,
    AddEducationTypeComponent,
    ExperienceTypesComponent,
    AddExperienceTypeComponent
  ],
    imports: [
        CommonModule,
        CatalogRoutingModule,
        MaterialModule,
        FormsModule,
        NgxPaginationModule,
        PipesModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        NgxSpinnerModule,
        DownloadJsonDialogModule,
        DirectivesModule,
        DigitOnlyModule
    ]
})
export class CatalogModule { }
