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
        path: 'developers',
        loadChildren: () => import('./developers/developers.module').then(m => m.DevelopersModule),
        data: {preload: true, delay: false}
      },
      {
        path: 'community',
        loadChildren: () => import('./community/community.module').then(m => m.CommunityModule),
        data: {preload: true, delay: false}
      },
      {
        path: 'blogs',
        loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule),
        data: {preload: true, delay: false}
      },
      {
        path: 'blog-details',
        loadChildren: () => import('./blog-details/blog-details.module').then(m => m.BlogDetailsModule),
        data: {preload: true, delay: false}
      },
      {
        path: 'my-profile',
        canActivate: [UserAuthGuard],
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
        data: {preload: false, delay: false}
      },
      {
        path: 'test',
        loadChildren: () => import('./test/test.module').then(m => m.TestModule),
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
