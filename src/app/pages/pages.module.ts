import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../widgets/widgets.module';

import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './containers/landing/landing.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './containers/about/about.component';

@NgModule({
  declarations: [LandingComponent, NavComponent, AboutComponent],
  imports: [CommonModule, PagesRoutingModule, WidgetsModule, SharedModule],
  exports: [NavComponent],
})
export class PagesModule {}
