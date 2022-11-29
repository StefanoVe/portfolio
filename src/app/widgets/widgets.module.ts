import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { ToggleDarkModeComponent } from './components/toggle-dark-mode/toggle-dark-mode.component';

@NgModule({
  declarations: [LinkedinComponent, ToggleDarkModeComponent],
  imports: [CommonModule],
  exports: [LinkedinComponent, ToggleDarkModeComponent],
})
export class WidgetsModule {}
