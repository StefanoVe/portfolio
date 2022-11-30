import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './containers/not-found/not-found.component';
import { ErrorsRoutingModule } from './errors-routing.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, ErrorsRoutingModule],
})
export class ErrorsModule {}
