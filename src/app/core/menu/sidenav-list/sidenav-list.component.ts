import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Input() menuItems: any[] = [];
  @Input() menuParentId: string;

  parentMenu: any[] = [];


  constructor(
    // private menuCtrService: MenuCtrService
  ) {
  }

  ngOnInit() {
    console.log('Iam Here');
    // this.parentMenu = this.menuItems.filter(item => item.parentId === this.menuParentId);
  }


  onClick(menuId: string) {
    // this.menuCtrService.toggleMenuItem(menuId);
    // this.menuCtrService.closeOtherSubMenus(this.menuItems, menuId);
  }


}
