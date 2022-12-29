import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public paragraphTxt = {
    open: '<p class="drop-shadow-md">',
    close: '</p>',
  };

  public imgText = {
    open: '<img src="/assets/me.jpg" class="w-40 h-40 rounded-full object-cover">',
    close: '</img>',
  };

  constructor(private _lang: LanguageService) {}

  public descriptionTxt() {
    return this._lang._languageSensitiveText({
      en: "I'm an Italian 🇮🇹 full stack developer.",
      it: 'Sono un developer Full Stack italiano 🇮🇹.',
    });
  }

  public childhoodTxt() {
    return this._lang._languageSensitiveText({
      en: "i've been passionate about everthing that involves IT since my early childhood and i'm always the first jumping in new, interesting, technologies and applications.",
      it: "Sono appassionato di tutto ciò che riguarda l'informatica sin dall'infanzia e sono sempre il primo a provare nuove tecnologie e applicazioni.",
    });
  }

  public timeOffTxt() {
    return this._lang._languageSensitiveText({
      en: "Last but not Least, in my time off i'm an airsoft afficionado and an incredible Geek.",
      it: 'Ultimo ma non per importanza, nel tempo libero sono un appassionato di Softair e un Geek incredibile.',
    });
  }

  public pastExperiencesTxt() {
    return this._lang._languageSensitiveText({
      en: "I started coding roughly at 14 years old, using basic C# to write and edit Mod Menus and RTMs in the PS3 modding scene. I first approached JavaScript at 20 years old, having to build the public website and members' dashboard for Legione Etruria ASD. Then, at 22 years old, i got my first full time job as a full stack web developer, working for Golden Italia using the MEAN stack.",
      it: 'Ho iniziato a scrivere codice a circa 14 anni, usando C# di base per scrivere e modificare Mod Menus e RTMs nella scena modding PS3. Mi sono avvicinato per la prima volta a JavaScript a 20 anni, dovendo sviluppare un sito pubblico e una dashboard membri per Legione Etruria ASD. A 22 anni invece, ho trovato il mio primo lavoro dipendente come sviluppatore full stack web, lavorando per Golden Italia usando la MEAN stack.',
    });
  }

  public aboutMe() {
    return this._lang._languageSensitiveText({
      en: 'About me',
      it: 'Su di me',
    });
  }
}
