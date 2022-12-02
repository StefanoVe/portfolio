import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WidgetsModule } from '../widgets/widgets.module';

import { LandingComponent } from './containers/landing/landing.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, PagesRoutingModule, WidgetsModule, SharedModule],
})
export class PagesModule {}
