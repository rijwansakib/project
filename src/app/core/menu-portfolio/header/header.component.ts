import { Component, OnInit } from '@angular/core';
import {ProfileInfo} from "../../../interfaces/profolio/profile-info";
import {MenuDetails} from "../../../interfaces/profolio/menu-details";

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
    profileTitle:'Riono',
    profileSubTitle:"Web Developer"
  }

  /*** menu-details */
  menuDataArray:MenuDetails[]=[
    {
      _id:"1",
      menuName:"Home",
      menuIconName:"fa fa-home",
      menuRouterLink:'/portfolio'
    },
    {
      _id:"2",
      menuName:"About",
      menuIconName:"fa fa-user",
      menuRouterLink:'/portfolio/about'
    },
    {
      _id:"3",
      menuName:"Services",
      menuIconName:"fa fa-home",
      menuRouterLink:'/portfolio/services'
    },
    {
      _id:"4",
      menuName:"Exprience",
      menuIconName:"fa fa-book",
      menuRouterLink:'/portfolio/exprience'
    },
    {
      _id:"5",
      menuName:"Works",
      menuIconName:"fa fa-laptop-code",
      menuRouterLink:'/portfolio/works'
    },
    {
      _id:"6",
      menuName:"Blog",
      menuIconName:"fa fa-pen",
      menuRouterLink:'/portfolio/blog'
    },
    {
      _id:"7",
      menuName:"Contact",
      menuIconName:"fa fa-address-card",
      menuRouterLink:'/portfolio/contact'
    },
    {
      _id:"7",
      menuIconName:'fas fa-comment',
      menuName:'Chat',
      menuRouterLink:'/portfolio/chat'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
