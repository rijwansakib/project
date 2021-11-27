import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeCardComponent } from './resume-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ResumeCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ResumeCardComponent
  ]
})
export class ResumeCardModule { }
