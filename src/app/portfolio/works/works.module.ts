import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorksRoutingModule} from './works-routing.module';
import {WorksComponent} from './works.component';
import {WorkCardModule} from "../../shared/lazy/protfolio/work-card/work-card.module";


@NgModule({
  declarations: [
    WorksComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    WorkCardModule
  ]
})
export class WorksModule {
}
