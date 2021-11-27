import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillDetailsComponent } from './skill-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SkillDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SkillDetailsComponent
  ]
})
export class SkillDetailsModule { }
