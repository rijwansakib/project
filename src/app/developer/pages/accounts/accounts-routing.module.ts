import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartOfAccountsComponent} from "./chart-of-accounts/chart-of-accounts.component";
import {AccountStatementComponent} from "./account-statement/account-statement.component";

const routes: Routes = [
  {path: 'chart-of-account', component: ChartOfAccountsComponent},
  {path: 'account-statement', component: AccountStatementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
