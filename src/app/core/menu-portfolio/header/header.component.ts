import { Component, OnInit } from '@angular/core';
import {ProfileInfo} from "../../../interfaces/profolio/profile-info";
import {MenuDetails} from "../../../interfaces/profolio/menu-details";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /*** profile-info */
  profileData:ProfileInfo={
    _id:'1',
    profileImg: '../../../../assets/images/junk/avatar.png',
    profileTitle:'Md Iqbal',
    profileSubTitle:"Web Developer",
  }

  /*** menu-details */
  menuDataArray:MenuDetails[]=[];

  userId: string

  constructor(
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.userId = this.storageService.getDataFromSessionStorage('PORTFOLIO_USER_ID')
    if (this.userId) {
      this.menuDataArray = [
        {
          _id:"1",
          menuName:"Home",
          menuIconName:"fa fa-home",
          menuRouterLink:'/portfolio/home',
          query: {user: this.userId}
        },
        {
          _id:"2",
          menuName:"About",
          menuIconName:"fa fa-user",
          menuRouterLink:'/portfolio/about',
          query: {user: this.userId}
        },
        {
          _id:"3",
          menuName:"Services",
          menuIconName:"fa fa-home",
          menuRouterLink:'/portfolio/services',
          query: {user: this.userId}
        },
        {
          _id:"4",
          menuName:"Exprience",
          menuIconName:"fa fa-book",
          menuRouterLink:'/portfolio/exprience',
          query: {user: this.userId}
        },
        {
          _id:"5",
          menuName:"Works",
          menuIconName:"fa fa-laptop-code",
          menuRouterLink:'/portfolio/works',
          query: {user: this.userId}
        },
        {
          _id:"6",
          menuName:"Blog",
          menuIconName:"fa fa-pen",
          menuRouterLink:'/portfolio/blog',
          query: {user: this.userId}
        },
        {
          _id:"7",
          menuName:"Contact",
          menuIconName:"fa fa-address-card",
          menuRouterLink:'/portfolio/contact',
          query: {user: this.userId}
        },
        {
          _id:"7",
          menuIconName:'fas fa-comment',
          menuName:'Chat',
          menuRouterLink:'/portfolio/chat',
          query: {user: this.userId}
        }
      ];
    }
  }

}
