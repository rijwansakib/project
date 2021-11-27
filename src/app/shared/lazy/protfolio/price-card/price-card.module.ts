import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceCardComponent } from './price-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PriceCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PriceCardComponent
  ]
})
export class PriceCardModule { }
