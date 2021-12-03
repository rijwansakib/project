import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppUsersComponent} from "./app-users.component";
import {DevelopersComponent} from "./developers/developers.component";
import {RequestDevelopersComponent} from "./request-developers/request-developers.component";

const routes: Routes = [
  {path: '', component: AppUsersComponent},
  {path: 'developers', component: DevelopersComponent},
  {path: 'request-developers', component: RequestDevelopersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUsersRoutingModule { }
