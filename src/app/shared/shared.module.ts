import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import {SnackbarNotificationComponent} from "./components/ui/snackbar-notification/snackbar-notification.component";
import {MessageDialogComponent} from "./components/ui/message-dialog/message-dialog.component";
import {ConfirmDialogComponent} from "./components/ui/confirm-dialog/confirm-dialog.component";
import {BottomSheetViewComponent} from "./components/ui/bottom-sheet-view/bottom-sheet-view.component";
import {MaterialModule} from "../material/material.module";



@NgModule({
  declarations: [
    FooterMainComponent,
    SnackbarNotificationComponent,
    MessageDialogComponent,
    ConfirmDialogComponent,
    BottomSheetViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    FooterMainComponent,
    SnackbarNotificationComponent,
    MessageDialogComponent,
    ConfirmDialogComponent,
    BottomSheetViewComponent
  ],
  providers: []
})
export class SharedModule { }
