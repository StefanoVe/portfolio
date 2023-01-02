import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    WidgetsModule,
    ErrorsModule,
    SharedModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
