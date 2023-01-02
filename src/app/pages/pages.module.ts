import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../widgets/widgets.module';

import { NavComponent } from './components/nav/nav.component';
import { TitleComponent } from './components/title/title.component';
import { AboutComponent } from './containers/about/about.component';
import { ContactComponent } from './containers/contact/contact.component';
import { ExperienceComponent } from './containers/experience/experience.component';
import { LandingComponent } from './containers/landing/landing.component';
import { SkillsComponent } from './containers/skills/skills.component';
import { ToolsComponent } from './containers/tools/tools.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    LandingComponent,
    NavComponent,
    AboutComponent,
    ExperienceComponent,
    TitleComponent,
    SkillsComponent,
    ToolsComponent,
    ContactComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, WidgetsModule, SharedModule],
  exports: [NavComponent],
})
export class PagesModule {}
