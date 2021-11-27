import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkCardComponent } from './work-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WorkCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    WorkCardComponent
  ]
})
export class WorkCardModule { }
