import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private _lang: LanguageService) {}

  public titleTxt() {
    return this._lang.languageSensitiveText({
      en: 'Contact',
      it: 'Contattami',
    });
  }
}
