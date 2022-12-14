import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animateDestroy', [
      state('void', style({ opacity: '0' })),
      transition('* => void', animate('500ms ease')),
    ]),
  ],
})
export class AppComponent {
  public darkMode: { strategy: 'class' | 'media'; enabled: boolean } = {
    strategy: 'media',
    enabled: true,
  };

  constructor(private _lang: LanguageService) {}

  public bootstrapDarkMode() {
    const hasDarkModeVar = localStorage.getItem('darkMode');

    if (!hasDarkModeVar) {
      return;
    }

    const isEnabled = hasDarkModeVar === 'true';
    this.darkMode = {
      strategy: 'class',
      enabled: isEnabled,
    };

    return this.darkMode;
  }

  public footerTopLeftTxt() {
    return this._lang.languageSensitiveText({
      en: 'Check out this project on Github',
      it: 'Esplora questo progetto su Github',
    });
  }

  public footerTopRightTxt() {
    return this._lang.languageSensitiveText({
      en: 'Built with Angular 15.0.0 and Tailwind CSS 3.2.4 ',
      it: 'Sviluppato con Angular 15.0.0 e Tailwind CSS 3.2.4',
    });
  }

  public footerBottomLeftTxt() {
    return this._lang.languageSensitiveText({
      en: 'Images created with Midjourney AI',
      it: 'Immagini create con Midjourney AI',
    });
  }

  public footerBottomRightTxt() {
    return this._lang.languageSensitiveText({
      en: 'Powered by HOSTINGER',
      it: 'Alimentato da HOSTINGER',
    });
  }
}
