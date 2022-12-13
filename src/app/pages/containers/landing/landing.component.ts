import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private _lang: LanguageService) {}

  public notReadyYetTxt() {
    return this._lang._languageSensitiveText({
      en: 'Not ready yet',
      it: 'Non ancora pronto',
    });
  }

  public birthDate = new Date(1999, 2, 27);

  public get age(): number {
    const today = new Date();

    let age = today.getFullYear() - this.birthDate.getFullYear();

    return age;
  }
}
