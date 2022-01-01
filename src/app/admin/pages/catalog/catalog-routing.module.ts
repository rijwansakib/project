import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewCategoryComponent} from "./categories/add-new-category/add-new-category.component";
import {AddNewSubCategoryComponent} from "./sub-categories/add-new-sub-category/add-new-sub-category.component";
import {AddNewTagComponent} from "./tags/add-new-tag/add-new-tag.component";
import {AddEducationTypeComponent} from "./education-types/add-education-type/add-education-type.component";
import {AddExperienceTypeComponent} from "./experience-types/add-experience-type/add-experience-type.component";
import {AddServiceTypeComponent} from "./service-types/add-service-type/add-service-type.component";
import {CategoriesComponent} from "./categories/categories.component";
import {SubCategoriesComponent} from "./sub-categories/sub-categories.component";
import {TagsComponent} from "./tags/tags.component";
import {EducationTypesComponent} from "./education-types/education-types.component";
import {ExperienceTypesComponent} from "./experience-types/experience-types.component";
import {ServiceTypesComponent} from "./service-types/service-types.component";

const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'add-new-category', component: AddNewCategoryComponent},
  {path: 'edit-category/:id', component: AddNewCategoryComponent},
  {path: 'sub-categories', component: SubCategoriesComponent},
  {path: 'add-new-sub-category', component: AddNewSubCategoryComponent},
  {path: 'edit-sub-category/:id', component: AddNewSubCategoryComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'add-new-tag', component: AddNewTagComponent},
  {path: 'edit-tag/:id', component: AddNewTagComponent},
  {path: 'education-types', component: EducationTypesComponent},
  {path: 'add-new-education-type', component: AddEducationTypeComponent},
  {path: 'edit-education-type/:id', component: AddEducationTypeComponent},
  {path: 'experience-types', component: ExperienceTypesComponent},
  {path: 'add-new-experience-type', component: AddExperienceTypeComponent},
  {path: 'edit-experience-type/:id', component: AddExperienceTypeComponent},
  {path: 'service-types', component: ServiceTypesComponent},
  {path: 'add-new-service-type', component: AddServiceTypeComponent},
  {path: 'edit-service-type/:id', component: AddServiceTypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
