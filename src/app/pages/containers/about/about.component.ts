import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public h1Txt = {
    open: '<h1 class="my-auto text-5xl font-mono-display text-end uppercase text-transparent max-w-fit bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">',
    close: '</h1>',
  };

  public paragraphTxt = {
    open: '<p class="drop-shadow-md">',
    close: '</p>',
  };

  public imgText = {
    open: '<img src="/assets/me.jpg" class="w-40 h-40 rounded-full object-cover">',
    close: '</img>',
  };

  constructor(private _lang: LanguageService) {}

  public firstParagraph() {
    return this._lang._languageSensitiveText({
      en: "I'm a full stack developer based in Italy 🇮🇹 specialized in Typescript development.",
      it: 'Sono un developer Full Stack italiano 🇮🇹 specializzato in Typescript.',
    });
  }

  public secondParagraph() {
    return this._lang._languageSensitiveText({
      en: "i've been passionate about everthing that involves IT since my early childhood and i'm always the first jumping in new, interesting, technologies and applications.",
      it: "Sono appassionato di tutto ciò che riguarda l'informatica sin dall'infanzia e sono sempre il primo a provare nuove tecnologie e applicazioni.",
    });
  }

  public thirdParagraph() {
    return this._lang._languageSensitiveText({
      en: "In my time off i'm an airsoft afficionado and an incredible Geek.",
      it: 'Nel tempo libero sono un appassionato di Softair e un Geek incredibile.',
    });
  }

  public aboutMe() {
    return this._lang._languageSensitiveText({
      en: 'About me',
      it: 'Su di me',
    });
  }
}
