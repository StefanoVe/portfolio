import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './containers/about/about.component';
import { ContactComponent } from './containers/contact/contact.component';
import { ExperienceComponent } from './containers/experience/experience.component';
import { LandingComponent } from './containers/landing/landing.component';
import { SkillsComponent } from './containers/skills/skills.component';
import { ToolsComponent } from './containers/tools/tools.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'tools',
    component: ToolsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
