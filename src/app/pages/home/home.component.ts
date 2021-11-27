import { Component, OnInit } from '@angular/core';
import {Blog} from "../../interfaces/blog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // DUMMY DATA
  blogs: Blog[] = [
    {
      _id: '1',
      slug: 'blog-post-1',
      title: 'How Choose Bicycle For Spriling In Australia Shooping Centres?',
      shortDesc: 'how Choose Bicycle For Spriling In Australia Shooping how Choose Bicycle For Spriling In Australia Shooping...',
      image: '/assets/images/junk/bussiness-english.jpg',
      author: {
        name: 'Md Iqbal',
        profileImage: '/assets/images/junk/peter-100x100.jpg'
      },
    },
    {
      _id: '2',
      slug: 'blog-post-2',
      title: 'How Choose Bicycle For Spriling In Australia Shooping Centres?',
      shortDesc: 'how Choose Bicycle For Spriling In Australia Shooping how Choose Bicycle For Spriling In Australia Shooping...',
      image: '/assets/images/junk/course-12-400x300.jpg',
      author: {
        name: 'Md Iqbal',
        profileImage: '/assets/images/junk/anthony-100x100.jpg'
      },
    },
    {
      _id: '3',
      slug: 'blog-post-3',
      title: 'How Choose Bicycle For Spriling In Australia Shooping Centres?',
      shortDesc: 'how Choose Bicycle For Spriling In Australia Shooping how Choose Bicycle For Spriling In Australia Shooping...',
      image: '/assets/images/junk/blog-8-450x267.jpg',
      author: {
        name: 'Md Iqbal',
        profileImage: '/assets/images/junk/21232f297a57a5a743894a0e4a801fc3.jpg'
      },
    },
    {
      _id: '3',
      slug: 'blog-post-3',
      title: 'How Choose Bicycle For Spriling In Australia Shooping Centres?',
      shortDesc: 'how Choose Bicycle For Spriling In Australia Shooping how Choose Bicycle For Spriling In Australia Shooping...',
      image: '/assets/images/junk/course-5-400x300.jpg',
      author: {
        name: 'Md Iqbal',
        profileImage: '/assets/images/junk/elsie-100x100.jpg'
      },
    },
    {
      _id: '4',
      slug: 'blog-post-4',
      title: 'How Choose Bicycle For Spriling In Australia Shooping Centres?',
      shortDesc: 'how Choose Bicycle For Spriling In Australia Shooping how Choose Bicycle For Spriling In Australia Shooping...',
      image: '/assets/images/junk/blog-8-450x267.jpg',
      author: {
        name: 'Md Iqbal',
        profileImage: '/assets/images/junk/peter-100x100.jpg'
      },
    },
    {
      _id: '5',
      slug: 'blog-post-5',
      title: 'How Choose Bicycle For Spriling In Australia Shooping Centres?',
      shortDesc: 'how Choose Bicycle For Spriling In Australia Shooping how Choose Bicycle For Spriling In Australia Shooping...',
      image: '/assets/images/junk/bussiness-english.jpg',
      author: {
        name: 'Md Iqbal',
        profileImage: '/assets/images/junk/anthony-100x100.jpg'
      },
    },
    {
      _id: '6',
      slug: 'blog-post-6',
      title: 'How Choose Bicycle For Spriling In Australia Shooping Centres?',
      shortDesc: 'how Choose Bicycle For Spriling In Australia Shooping how Choose Bicycle For Spriling In Australia Shooping...',
      image: '/assets/images/junk/bussiness-english.jpg',
      author: {
        name: 'Md Iqbal',
        profileImage: '/assets/images/junk/anthony-100x100.jpg'
      },
    },
    {
      _id: '7',
      slug: 'blog-post-7',
      title: 'How Choose Bicycle For Spriling In Australia Shooping Centres?',
      shortDesc: 'how Choose Bicycle For Spriling In Australia Shooping how Choose Bicycle For Spriling In Australia Shooping...',
      image: '/assets/images/junk/course-5-400x300.jpg',
      author: {
        name: 'Md Iqbal',
        profileImage: '/assets/images/junk/elsie-100x100.jpg'
      },
    },
    {
      _id: '8',
      slug: 'blog-post-8',
      title: 'How Choose Bicycle For Spriling In Australia Shooping Centres?',
      shortDesc: 'how Choose Bicycle For Spriling In Australia Shooping how Choose Bicycle For Spriling In Australia Shooping...',
      image: '/assets/images/junk/bussiness-english.jpg',
      author: {
        name: 'Md Iqbal',
        profileImage: '/assets/images/junk/anthony-100x100.jpg'
      },
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
