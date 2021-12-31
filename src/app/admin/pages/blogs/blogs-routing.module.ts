import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActiveBlogsComponent} from "./active-blogs/active-blogs.component";
import {PendingBlogsComponent} from "./pending-blogs/pending-blogs.component";

const routes: Routes = [
  {path: '', redirectTo: 'active-blogs'},
  {path: 'active-blogs', component: ActiveBlogsComponent},
  {path: 'pending-blogs', component: PendingBlogsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
