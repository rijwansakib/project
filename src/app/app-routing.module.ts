import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminAuthStateGuard} from "./auth-guard/admin-auth-state.guard";
import {environment} from "../environments/environment";
import {AdminAuthGuard} from "./auth-guard/admin-auth.guard";
import {CustomPreloadingStrategy} from "./core/utils/preloading-strategy";
import {UserAuthStateGuard} from "./auth-guard/user-auth-state.guard";
import {UserAuthGuard} from "./auth-guard/user-auth.guard";
import {DeveloperAuthGuard} from "./auth-guard/developer-auth.guard";

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
    canActivate: [DeveloperAuthGuard],
    loadChildren: () => import('./developer/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'signup',
    canActivate: [UserAuthStateGuard],
    loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'sign-in',
    canActivate: [UserAuthStateGuard],
    loadChildren: () => import('./auth/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  // ADMIN
  {
    path: environment.adminLoginUrl,
    canActivate: [AdminAuthStateGuard],
    loadChildren: () => import('./admin/admin-auth/admin-auth.module').then(m => m.AdminAuthModule)
  },
  {
    path: environment.adminBaseUrl,
    canActivate: [AdminAuthGuard],
    loadChildren: () => import('./admin/pages/pages.module').then(m => m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: CustomPreloadingStrategy,
    relativeLinkResolution: 'legacy',
    // initialNavigation: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy, AdminAuthGuard, AdminAuthStateGuard, UserAuthGuard, UserAuthStateGuard, DeveloperAuthGuard]
})
export class AppRoutingModule {
}
