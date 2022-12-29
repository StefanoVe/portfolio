import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class Experience {
  constructor(private _lang: LanguageService) {}

  public events(): {
    title: string;
    dates: { from: Date; to: Date };
    description: string;
    isSideProject?: boolean;
  }[] {
    return [
      {
        title: this._lang._languageSensitiveText({
          en: 'Full Stack Web Developer',
          it: 'Sviluppatore Web full stack',
        }),
        dates: { from: new Date('2021-09-20'), to: new Date() },
        description: this._lang._languageSensitiveText({
          it: `Sviluppo e mantenimento di vari servizi interni ed esterni per Golden Italia ed i brand ad essa collegati,
          Utilizzando la MEAN stack (Express e MongoDB per lo sviluppo del backend e Angular e TailwindCSS per lo sviluppo del frontend).
          <br /><br />
          Assistenza e consulenza informatica verso gli altri reparti dell'azienda.`,
          en: `Development and maintenance of various internal and external services for Golden Italia and it's associated brands using the MEAN stack (Express and MongoDB for backend development and Angular and TailwindCSS for frontend development). 
          <br /><br />
          IT assistance and consulting towards other company departments.`,
        }),
      },
      {
        isSideProject: true,
        title: this._lang._languageSensitiveText({
          en: 'Full Stack Web Developer',
          it: 'Sviluppatore Web full stack',
        }),
        dates: { from: new Date('2020-12-01'), to: new Date() },
        description: this._lang._languageSensitiveText({
          it: `Sviluppo di back-end e front-end del sito Web di Legione Etruria ASD, usando vanilla JS e l'API Developer di Wix`,
          en: `Development of the back and front ends of the Legione Etruria ASD Web site, using vanilla JS and the Wix Developer API`,
        }),
      },
      {
        title: this._lang._languageSensitiveText({
          en: 'Internship as a C# developer',
          it: 'Stage come sviluppatore full-stack',
        }),
        dates: { from: new Date('2019-05-01'), to: new Date('2019-07-01') },
        description: this._lang._languageSensitiveText({
          it: `stage nel quale è stata sviluppata un'app per iOS e Android per la gestione di alcune attività interne all'Azienda.
          L'applicazione è stata sviluppata utilizzando Xamarin.
          durante il periodo di stage mi è stato incaricato di sviluppare il back-end dell'applicazione`,
          en: `Internship in which an app for iOS and Android was developed for the management of some internal activities of the Company, using Xamarin. during the internship I was in charge of developing the back-end of the application`,
        }),
      },
    ];
  }

  public isToday(date: Date): boolean {
    return date.toDateString() === new Date().toDateString();
  }

  public stillHereTxt() {
    return this._lang._languageSensitiveText({
      en: 'Ongoing',
      it: 'Oggi',
    });
  }

  public sideProjectTxt() {
    return this._lang._languageSensitiveText({
      en: 'Side project',
      it: 'Progetto personale',
    });
  }

  public title() {
    return this._lang._languageSensitiveText({
      en: 'Experience',
      it: 'Esperienza',
    });
  }
}
