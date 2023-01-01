import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const LS_LANGUAGE = 'lang';

export enum EnumAvailableLanguages {
  Italian = 'it',
  English = 'en',
}
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _currentLang =
    (localStorage.getItem(LS_LANGUAGE) as EnumAvailableLanguages) ||
    EnumAvailableLanguages.English;
  public languageChanges = new BehaviorSubject<EnumAvailableLanguages>(
    this._currentLang
  );

  constructor() {}

  public get currentLang() {
    return this._currentLang;
  }

  public set currentLang(lang: EnumAvailableLanguages) {
    localStorage.setItem(LS_LANGUAGE, lang);
    this._currentLang = lang;
    this.languageChanges.next(lang);
  }

  public languageSensitiveText(text: { en: string; it: string }) {
    return text[this._currentLang];
  }
}
