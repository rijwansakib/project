import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroductionComponent} from "./introduction/introduction.component";
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {AddServiceComponent} from "./services/add-service/add-service.component";
import {ExperienceComponent} from "./experience/experience.component";
import {AddExperienceComponent} from "./experience/add-experience/add-experience.component";
import {WorksComponent} from "./works/works.component";
import {AddWorkComponent} from "./works/add-work/add-work.component";
import {ContactComponent} from "./contact/contact.component";
import {EducationsComponent} from "./educations/educations.component";
import {AddEducationComponent} from "./educations/add-education/add-education.component";

const routes: Routes = [
  {path: '', redirectTo: 'introduction'},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'add-service', component: AddServiceComponent},
  {path: 'edit-service/:id', component: AddServiceComponent},
  {path: 'experiences', component: ExperienceComponent},
  {path: 'add-experience', component: AddExperienceComponent},
  {path: 'edit-experience/:id', component: AddExperienceComponent},
  {path: 'educations', component: EducationsComponent},
  {path: 'add-education', component: AddEducationComponent},
  {path: 'edit-education/:id', component: AddEducationComponent},
  {path: 'works', component: WorksComponent},
  {path: 'add-work', component: AddWorkComponent},
  {path: 'edit-work/:id', component: AddWorkComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
