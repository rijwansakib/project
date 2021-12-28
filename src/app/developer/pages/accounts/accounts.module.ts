import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ChartOfAccountsComponent } from './chart-of-accounts/chart-of-accounts.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';


@NgModule({
  declarations: [
    ChartOfAccountsComponent,
    AccountStatementComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
