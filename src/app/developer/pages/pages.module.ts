import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {SidenavListComponent} from './components/sidenav-list/sidenav-list.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
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
      },
      {
        path: 'blogs',
        loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule),
      },
      {
        path: 'image-gallery',
        loadChildren: () => import('./image-gallery/image-gallery.module').then(m => m.ImageGalleryModule),
      },
      {
        path: 'image-folder',
        loadChildren: () => import('./image-folder/image-folder.module').then(m => m.ImageFolderModule),
      },
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
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
  ],
  providers: []
})
export class PagesModule {
}
