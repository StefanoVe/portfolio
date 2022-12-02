import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmailComponent } from './components/email/email.component';
import { GithubComponent } from './components/github/github.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { ToggleDarkModeComponent } from './components/toggle-dark-mode/toggle-dark-mode.component';
import { ToggleLanguageComponent } from './components/toggle-language/toggle-language.component';

@NgModule({
  declarations: [
    LinkedinComponent,
    ToggleDarkModeComponent,
    GithubComponent,
    EmailComponent,
    InstagramComponent,
    ToggleLanguageComponent,
  ],
  imports: [CommonModule],
  exports: [
    LinkedinComponent,
    ToggleDarkModeComponent,
    GithubComponent,
    EmailComponent,
    InstagramComponent,
    ToggleLanguageComponent,
  ],
})
export class WidgetsModule {}
