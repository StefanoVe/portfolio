import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-toggle-dark-mode',
  templateUrl: './toggle-dark-mode.component.html',
  styleUrls: ['./toggle-dark-mode.component.scss'],
})
export class ToggleDarkModeComponent {
  @Input() showLabel = true;

  constructor(private _lang: LanguageService) {}

  public handleDarkMode() {
    const darkModeGetter = localStorage.getItem('darkMode');

    if (darkModeGetter === 'true') {
      localStorage.setItem('darkMode', 'false');
      return;
    }
    localStorage.setItem('darkMode', 'true');
  }

  public isDarkModeChecked() {
    const darkModeGetter = localStorage.getItem('darkMode');

    if (!darkModeGetter) {
      return true;
    }

    return darkModeGetter === 'true';
  }

  public darkModeTxt() {
    return this._lang.languageSensitiveText({
      en: 'Nighttime',
      it: 'Notte',
    });
  }
  public lightModeTxt() {
    return this._lang.languageSensitiveText({
      en: 'Daytime',
      it: 'Giorno',
    });
  }
}
