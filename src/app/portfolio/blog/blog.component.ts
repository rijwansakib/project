import { Component, OnInit } from '@angular/core';
import {BlogCardInfo} from "../../interfaces/profolio/blog-card-info";
import {BlogCategorie} from "../../interfaces/profolio/blog-categorie";
import {BlogMeta} from "../../interfaces/profolio/blog-meta";
import {BlogTags} from "../../interfaces/profolio/blog-tags";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  /*** blog-data-area */
  blogDataArray:BlogCardInfo[]=[
    {
      _id:'1',
      blogImg:'./assets/image/blog-1.png',
      blogCategoriBadge:'Interview',
      blogRouterLink:'#',
      blogTitle:'Best Podcast App Tips You Will Read This Year',
      blogWritterName:"Riono Doe",
      blogWrittingDate:'Jan 8, 2021'
    },
    {
      _id:'2',
      blogImg:'./assets/image/blog-2.png',
      blogCategoriBadge:'Podcast',
      blogRouterLink:'#',
      blogTitle:'7 Secret Techniques To Improve Gradients',
      blogWritterName:"Riono Doe",
      blogWrittingDate:'Jan 8, 2021'
    },
    {
      _id:'3',
      blogImg:'./assets/image/blog-3.png',
      blogCategoriBadge:'Meetups',
      blogRouterLink:'#',
      blogTitle:'Fall In Love With Dashboard Design',
      blogWritterName:"Riono Doe",
      blogWrittingDate:'Jan 8, 2021'
    },
    {
      _id:'4',
      blogImg:'./assets/image/blog-4.png',
      blogCategoriBadge:'Updates',
      blogRouterLink:'#',
      blogTitle:'The Hidden Mystery Behind Pixel 4',
      blogWritterName:"Riono Doe",
      blogWrittingDate:'Jan 8, 2021'
    },
    {
      _id:'5',
      blogImg:'./assets/image/blog-5.png',
      blogCategoriBadge:'Inspiration',
      blogRouterLink:'#',
      blogTitle:'80 Things To Do Immediately About Icons',
      blogWritterName:"Riono Doe",
      blogWrittingDate:'Jan 8, 2021'
    },
    {
      _id:'6',
      blogImg:'./assets/image/blog-6.png',
      blogCategoriBadge:'Interview',
      blogRouterLink:'#',
      blogTitle:'The 7 Best Things About Mobile App',
      blogWritterName:"Riono Doe",
      blogWrittingDate:'Jan 8, 2021'
    }
  ]
  /*** categorie-dynamic */
  categorieArray:BlogCategorie[]=[
    {
      _id:'1',
      categorieName:'Interview',
      categorieRouterLink:'#'
    },
    {
      _id:'2',
      categorieName:'Podcast',
      categorieRouterLink:'#'
    },
    {
      _id:'3',
      categorieName:'Inspiration',
      categorieRouterLink:'#'
    },
    {
      _id:'4',
      categorieName:'Meetups',
      categorieRouterLink:'#'
    },
    {
      _id:'5',
      categorieName:'Updates',
      categorieRouterLink:'#'
    }
  ]
  /*** meta-dynamic */
  metaArray:BlogMeta[]=[
    {
      _id:'1',
      metaName:'Log in',
      metaRouterLink:'#'
    },
    {
      _id:'2',
      metaName:'Entries feed',
      metaRouterLink:'#'
    },
    {
      _id:'3',
      metaName:'Comments feed',
      metaRouterLink:'#'
    },
    {
      _id:'4',
      metaName:'WordPress.org',
      metaRouterLink:'#'
    },
  ]
  /*** tag-dynamic */
  tagArray:BlogTags[]=[
    {
      _id:'1',
      tagName:'Photo',
      tagRouterLink:'#'
    },
    {
      _id:'2',
      tagName:'Audio',
      tagRouterLink:'#'
    },
    {
      _id:'3',
      tagName:'Gallery',
      tagRouterLink:'#'
    },
    {
      _id:'4',
      tagName:'Video',
      tagRouterLink:'#'
    },
    {
      _id:'5',
      tagName:'Links',
      tagRouterLink:'#'
    },
    {
      _id:'6',
      tagName:'Blog',
      tagRouterLink:'#'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
