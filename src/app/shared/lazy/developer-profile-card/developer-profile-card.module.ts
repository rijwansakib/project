import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperProfileCardComponent } from './developer-profile-card.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        DeveloperProfileCardComponent
    ],
    exports: [
        DeveloperProfileCardComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DeveloperProfileCardModule { }
