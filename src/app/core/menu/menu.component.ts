import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {NavigationEnd, Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {UserDataService} from "../../services/user-data.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  public showBackToTop = false;

  @ViewChild('sidenav', {static: true}) sidenav: any;

  scrollPosition = 0;
  count = 0;

  // MENU
  menus: any[] = [
    {id: '1', name: 'Home', routerLink: '/', parentId: null, hasSubMenu: false, depth: 0},
    {id: '2', name: 'Products', routerLink: '/all-product-list', parentId: null, hasSubMenu: false, depth: 0},
    {id: '3', name: 'Installation & Repair', routerLink: null, parentId: null, hasSubMenu: true, depth: 0},
    {id: '4', name: 'Offers', routerLink: null, parentId: null, hasSubMenu: true, depth: 0},
    {id: '5', name: 'Blog', routerLink: '/blog', parentId: null, hasSubMenu: false, depth: 0},
    {id: '6', name: 'About Us', routerLink: null, parentId: null, hasSubMenu: true, depth: 0},
    {id: '7', name: 'Contact Us', routerLink: '/contact', parentId: null, hasSubMenu: false, depth: 0},
  ];

  // User Data
  user: User = null;
  isUserAuth = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    public userService: UserService,
    public userDataService: UserDataService,
  ) {
    window.addEventListener('scroll', this.scrolling, true);
  }

  ngOnInit() {
    this.userService.getUserStatusListener().subscribe(() => {
      this.isUserAuth = this.userService.getUserStatus();
      if (this.isUserAuth) {
        this.getLoggedInUserInfo();
      }
    });
    this.isUserAuth = this.userService.getUserStatus();
    if (this.isUserAuth) {
      this.getLoggedInUserInfo();
    }

  }

  public scrollToTop() {
    const scrollDuration = 200;
    const scrollStep = -window.pageYOffset / (scrollDuration / 20);
    const scrollInterval = setInterval(() => {
      if (window.pageYOffset !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    ($event.target.documentElement.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
  }


  // Scroll Control
  private scrolling = () => {
    this.scrollPosition = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
  }


  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.sidenav.close();
      }
    });
    // this.menuCtrService.expandActiveSubMenu(this.menus);
  }

  /**
   * HTTP REQ HANDLE
   */

  private getLoggedInUserInfo() {
    const select = 'fullName username';
    this.userDataService.getLoggedInUserInfo(select)
      .subscribe(res => {
        this.user = res.data;
      }, error => {
        console.log(error);
      });
  }


}
