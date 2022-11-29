import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GithubComponent } from './components/github/github.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { ToggleDarkModeComponent } from './components/toggle-dark-mode/toggle-dark-mode.component';

@NgModule({
  declarations: [LinkedinComponent, ToggleDarkModeComponent, GithubComponent],
  imports: [CommonModule],
  exports: [LinkedinComponent, ToggleDarkModeComponent, GithubComponent],
})
export class WidgetsModule {}
