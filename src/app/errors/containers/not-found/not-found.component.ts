import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  public animationMs = 1000;
  constructor(private router: Router, private _lang: LanguageService) {}

  public notFoundTxt() {
    return this._lang.languageSensitiveText({
      en: "Can't find the way back?",
      it: 'Non trovi più la strada?',
    });
  }

  public wannaGoHomeTxt() {
    return this._lang.languageSensitiveText({
      en: 'Wanna go home?',
      it: 'Vuoi tornare a casa?',
    });
  }

  public returnToHome() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, this.animationMs);
  }
}
