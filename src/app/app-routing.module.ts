import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'developer-panel',
    loadChildren: () => import('./developer/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./auth/sign-in/sign-in.module').then(m => m.SignInModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
