import {SignUpComponent} from './sign-up.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeveloperComponent} from "./developer/developer.component";

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent
  },
  {
    path: 'developer',
    component: DeveloperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule {
}
