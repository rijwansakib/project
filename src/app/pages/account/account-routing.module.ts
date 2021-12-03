import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountComponent} from './account.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {ChangePasswordComponent} from './change-password/change-password.component';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {path: '', redirectTo: 'basic-info'},
      {path: 'basic-info', component: BasicInfoComponent},
      {path: 'change-password', component: ChangePasswordComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
