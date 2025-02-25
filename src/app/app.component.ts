import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { combineLatest, tap } from 'rxjs';
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

  constructor(
    private _lang: LanguageService,
    private _meta: Meta,
    private _title: Title,
    private _router: Router
  ) {
    let latestEvent: ActivationEnd;

    combineLatest([this._lang.currentLanguage$, this._router.events])
      .pipe(
        tap(([lang, event]) => {
          if (event instanceof ActivationEnd) {
            if (!Object.keys(event.snapshot.data).length) {
              return;
            }
            latestEvent = event;
          }

          if (!latestEvent) {
            return;
          }

          const r = latestEvent.snapshot.data;

          this._title.setTitle(
            'Stefano Vecchietti - ' + r[`title_${lang}`] || ''
          );
          this._meta.updateTag({
            name: 'description',
            content: r[`description_${lang}`],
          });
        })
      )
      .subscribe();

    this._meta.updateTag({
      name: 'keywords',
      content:
        'portfolio, web development, HTML, CSS, JavaScript, Angular, React, Node.js, front-end development, back-end development, full-stack development, responsive design, user experience, UX design',
    });
  }

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
      en: 'Built with Angular 15 to 17 and Tailwind CSS 3.2.4 ',
      it: 'Sviluppato con Angular (da 15 a 17) e Tailwind CSS 3.2.4',
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
