import {Component, Input, OnInit} from '@angular/core';
import {MenuSidebar} from '../../../../interfaces/menu-sidebar';
import {MenuCtrService} from '../../../../services/menu-ctr.service';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Input() menuItems: MenuSidebar[];
  @Input() menuParentId: string = null;

  parentMenu: MenuSidebar[] = [];


  constructor(
    private menuCtrService: MenuCtrService
  ) {
  }

  ngOnInit() {
    this.parentMenu = this.menuItems.filter(item => item.parentId === this.menuParentId);
  }

  onClick(menuId) {
    this.menuCtrService.toggleMenuItemAdmin(menuId);
    this.menuCtrService.closeOtherSubMenusAdmin(this.menuItems, menuId);
  }


}
