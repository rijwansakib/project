import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {HeaderComponent} from './header/header.component';
import {SidenavListComponent} from './sidenav-list/sidenav-list.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material/material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    SidenavListComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        FlexLayoutModule,
        SharedModule
    ],
    exports: [
        MenuComponent,
        HeaderComponent
    ]
})
export class MenuModule {
}
