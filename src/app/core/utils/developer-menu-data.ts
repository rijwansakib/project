import {MenuSidebar} from "../../interfaces/menu-sidebar";


export const menuItemsDeveloper: MenuSidebar[] = [

  // Parent Dashboard
  {
    id: '1',
    title: 'Dashboard',
    icon: 'dashboard',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'dashboard',
    href: null,
    target: null
  },
  // Parent Gallery Folder
  {
    id: '2',
    title: 'Blogs',
    icon: 'people',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'blogs',
    href: null,
    target: null
  },
  // Parent Gallery Folder
  {
    id: '731',
    title: 'Gallery',
    icon: 'collections',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '45x',
    title: 'Image Folder',
    icon: 'folder',
    hasSubMenu: false,
    parentId: '731',
    routerLink: 'image-folder',
    href: null,
    target: null
  },
  // Parent Gallery
  {
    id: '4',
    title: 'Image Gallery',
    icon: 'collections',
    hasSubMenu: false,
    parentId: '731',
    routerLink: 'image-gallery',
    href: null,
    target: null
  },
  // Parent Accounts
  {
    id: 'ac-01',
    title: 'Accounts',
    icon: 'collections',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'ac-ch-0',
    title: 'Charts of Accounts',
    icon: 'folder',
    hasSubMenu: false,
    parentId: 'ac-01',
    routerLink: 'accounts/chart-of-account',
    href: null,
    target: null
  },
  // Parent Gallery
  {
    id: 'ac-ch-1',
    title: 'Account Statement',
    icon: 'folder',
    hasSubMenu: false,
    parentId: 'ac-01',
    routerLink: 'accounts/account-statement',
    href: null,
    target: null
  },
]
