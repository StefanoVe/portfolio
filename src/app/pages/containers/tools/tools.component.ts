import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent {
  constructor(private _lang: LanguageService) {}

  public get title() {
    return this._lang.languageSensitiveText({
      en: 'Tools',
      it: 'Strumenti',
    });
  }

  public get description() {
    return this._lang.languageSensitiveText({
      en: 'Here are the tools I am most familiar with at the moment.',
      it: 'Questi sono i softwares con cui sono più familiare al momento.',
    });
  }
}
