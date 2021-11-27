import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {FunFactsCardModule} from "../../shared/lazy/protfolio/fun-facts-card/fun-facts-card.module";
import {SkillDetailsModule} from "../../shared/lazy/protfolio/skill-details/skill-details.module";



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FunFactsCardModule,
    SkillDetailsModule
  ]
})
export class AboutModule { }
