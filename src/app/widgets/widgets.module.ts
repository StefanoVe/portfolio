import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GithubComponent } from './components/github/github.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { ToggleDarkModeComponent } from './components/toggle-dark-mode/toggle-dark-mode.component';
import { EmailComponent } from './components/email/email.component';
import { InstagramComponent } from './components/instagram/instagram.component';

@NgModule({
  declarations: [LinkedinComponent, ToggleDarkModeComponent, GithubComponent, EmailComponent, InstagramComponent],
  imports: [CommonModule],
  exports: [LinkedinComponent, ToggleDarkModeComponent, GithubComponent, EmailComponent, InstagramComponent],
})
export class WidgetsModule {}
