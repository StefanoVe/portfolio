import { Component } from '@angular/core';
import {
  EnumAvailableLanguages,
  LanguageService,
} from 'src/app/services/language.service';

@Component({
  selector: 'app-toggle-language',
  templateUrl: './toggle-language.component.html',
  styleUrls: ['./toggle-language.component.scss'],
})
export class ToggleLanguageComponent {
  public language = EnumAvailableLanguages.English;

  constructor(private _lang: LanguageService) {
    this.language = this._lang.currentLang;
  }

  public languageEemoji = {
    en: '🇬🇧',
    it: '🇮🇹',
  };

  public toggleLanguage(): void {
    this._lang.currentLang =
      this.language === EnumAvailableLanguages.English
        ? EnumAvailableLanguages.Italian
        : EnumAvailableLanguages.English;

    this.language = this._lang.currentLang;
  }
}
