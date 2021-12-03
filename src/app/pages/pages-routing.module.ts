import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from "./pages.component";
import {UserAuthGuard} from "../auth-guard/user-auth.guard";
import {UserAuthStateGuard} from "../auth-guard/user-auth-state.guard";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: {preload: true, delay: false}
      },
      {
        path: 'my-profile',
        canActivate: [UserAuthGuard],
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
        data: {preload: false, delay: false}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserAuthGuard, UserAuthStateGuard]
})
export class PagesRoutingModule {
}
