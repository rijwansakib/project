import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogsComponent} from "./blogs.component";
import {AddBlogComponent} from "./add-blog/add-blog.component";

const routes: Routes = [
  {path: '', component: BlogsComponent},
  {path: 'add-blog', component: AddBlogComponent},
  {path: 'edit-blog/:id', component: AddBlogComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
