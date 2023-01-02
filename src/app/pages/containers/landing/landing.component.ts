import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private _lang: LanguageService) {}

  public get HelloTxt() {
    return this._lang.languageSensitiveText({
      en: 'Hello World!',
      it: 'Ciao Mondo!',
    });
  }

  public get ImTxt() {
    return this._lang.languageSensitiveText({
      en: "I'm",
      it: 'Mi chiamo',
    });
  }

  public get SubtitleTxt() {
    return this._lang.languageSensitiveText({
      en: 'a full-stack web developer based in Italy 🇮🇹!',
      it: 'e sono un developer full-stack italiano 🇮🇹!',
    });
  }
}
