import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../widgets/widgets.module';

import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './containers/about/about.component';
import { Experience } from './containers/experience/experience.component';
import { LandingComponent } from './containers/landing/landing.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [LandingComponent, NavComponent, AboutComponent, Experience],
  imports: [CommonModule, PagesRoutingModule, WidgetsModule, SharedModule],
  exports: [NavComponent],
})
export class PagesModule {}
