import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {SidenavListComponent} from './components/sidenav-list/sidenav-list.component';
import {SharedModule} from '../../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EditorAuthRoleGuard} from '../../auth-guard/editor-auth-role.guard';
import {AdminAuthRoleGuard} from '../../auth-guard/admin-auth-role.guard';
import {CheckAuthAccessGuard} from '../../auth-guard/check-auth-access.guard';
import {MaterialModule} from "../../material/material.module";


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'catalog',
        loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'blogs',
        loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'image-gallery',
        loadChildren: () => import('./image-gallery/image-gallery.module').then(m => m.ImageGalleryModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'image-folder',
        loadChildren: () => import('./image-folder/image-folder.module').then(m => m.ImageFolderModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'additional-pages',
        loadChildren: () => import('./additional-pages/additional-pages.module').then(m => m.AdditionalPagesModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'newsletter',
        loadChildren: () => import('./newsletter/newsletter.module').then(m => m.NewsletterModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'app-users',
        canActivate: [CheckAuthAccessGuard, EditorAuthRoleGuard],
        loadChildren: () => import('./app-users/app-users.module').then(m => m.AppUsersModule)
      },
      {
        path: 'users',
        canActivate: [CheckAuthAccessGuard, EditorAuthRoleGuard],
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'roles',
        canActivate: [CheckAuthAccessGuard, EditorAuthRoleGuard],
        loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
      },
      {
        path: 'my-profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'footer-data',
        loadChildren: () => import('./footer-data/footer-data.module').then(m => m.FooterDataModule),
        canActivate: [CheckAuthAccessGuard]
      }
    ]
  },
];

@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    SidenavListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
  ],
  exports: [],
  providers: [AdminAuthRoleGuard, EditorAuthRoleGuard, CheckAuthAccessGuard]
})
export class PagesModule {
}
