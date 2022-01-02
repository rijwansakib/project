import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './blog-details.component';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';
import {MaterialModule} from "../../material/material.module";
import {ExtendedModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../../shared/pipes/pipes.module";


@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogCommentComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule,
    MaterialModule,
    ExtendedModule,
    FormsModule,
    PipesModule
  ]
})
export class BlogDetailsModule { }
