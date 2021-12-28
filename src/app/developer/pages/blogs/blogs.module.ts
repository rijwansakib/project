import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import {MaterialModule} from "../../../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxSpinnerModule} from "ngx-spinner";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {DirectivesModule} from "../../../shared/directives/directives.module";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    BlogsComponent,
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    AngularEditorModule,
    DirectivesModule,
    NgxPaginationModule
  ]
})
export class BlogsModule { }
