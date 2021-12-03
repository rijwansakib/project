import {Component, OnInit} from '@angular/core';
import localeBn from '@angular/common/locales/bn';
import {AdminService} from "./services/admin.service";
import {UserService} from "./services/user.service";
import {registerLocaleData} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-ui';

  constructor(
    private adminService: AdminService,
    private userService: UserService,
  ) {
    registerLocaleData(localeBn, 'bn');
    this.userService.autoUserLoggedIn();
    this.adminService.autoAdminLoggedIn();
  }


  ngOnInit() {

  }

}
