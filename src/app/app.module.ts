import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {UiService} from "./services/ui.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorHandleInterceptor} from "./error-handler/error-handle.interceptor";
import {AuthUserInterceptor} from "./auth-interceptor/auth-user.interceptor";
import {AuthAdminInterceptor} from "./auth-interceptor/auth-admin.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandleInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthUserInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthAdminInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
