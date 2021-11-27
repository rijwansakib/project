import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageLoadErrorDirective} from './image-load-error.directive';
import {ImageProfileErrorDirective} from "./image-profile-error.directive";



@NgModule({
  declarations: [
    ImageLoadErrorDirective,
    ImageProfileErrorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageLoadErrorDirective,
    ImageProfileErrorDirective
  ]
})
export class DirectivesModule { }
