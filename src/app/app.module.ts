import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WidgetsModule, ErrorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
