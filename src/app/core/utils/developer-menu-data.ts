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
    id: 'pf-01',
    title: 'Portfolio',
    icon: 'collections',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'pf-ch-0',
    title: 'Introduction',
    icon: 'folder',
    hasSubMenu: false,
    parentId: 'pf-01',
    routerLink: 'portfolio/introduction',
    href: null,
    target: null
  },
  {
    id: 'pf-ch-1',
    title: 'About',
    icon: 'folder',
    hasSubMenu: false,
    parentId: 'pf-01',
    routerLink: 'portfolio/about',
    href: null,
    target: null
  },
  {
    id: 'pf-ch-2',
    title: 'Services',
    icon: 'folder',
    hasSubMenu: false,
    parentId: 'pf-01',
    routerLink: 'portfolio/services',
    href: null,
    target: null
  },
  {
    id: 'pf-ch-3',
    title: 'Experiences',
    icon: 'folder',
    hasSubMenu: false,
    parentId: 'pf-01',
    routerLink: 'portfolio/experiences',
    href: null,
    target: null
  },
  {
    id: 'pf-ch-4',
    title: 'Educations',
    icon: 'folder',
    hasSubMenu: false,
    parentId: 'pf-01',
    routerLink: 'portfolio/educations',
    href: null,
    target: null
  },
  {
    id: 'pf-ch-5',
    title: 'Works',
    icon: 'folder',
    hasSubMenu: false,
    parentId: 'pf-01',
    routerLink: 'portfolio/works',
    href: null,
    target: null
  },
  {
    id: 'pf-ch-5',
    title: 'Contact',
    icon: 'folder',
    hasSubMenu: false,
    parentId: 'pf-01',
    routerLink: 'portfolio/contact',
    href: null,
    target: null
  },
]
