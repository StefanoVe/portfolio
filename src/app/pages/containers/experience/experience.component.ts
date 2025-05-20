import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  constructor(private _lang: LanguageService) {}

  public events(): {
    title: string;
    dates: { from: Date; to: Date };
    description: string;
    isSideProject?: boolean;
  }[] {
    return [
      {
        isSideProject: true,
        title: this._lang.languageSensitiveText({
          en: 'CTO / Co Founder',
          it: 'CTO / Co Fondatore',
        }),
        dates: { from: new Date('2023-11-01'), to: new Date('2025-02-28') },
        description: this._lang.languageSensitiveText({
          it: `Guido lo sviluppo di Notify, un biglietto da visita smart progettato per semplificare il prospecting negli spazi di coworking. Come co-fondatore dell’azienda e CTO, introduco tecnologie innovative per portare Notify sul mercato con successo. Lavorando a stretto contatto con i miei co-fondatori, contribuisco a definire strategie e raggiungere gli obiettivi aziendali, mettendo in campo leadership e competenze tecniche per far crescere l’azienda.`,
          en: `I am leading the development of Notify, a smart business card designed to simplify prospecting in coworking spaces. As a co-founder of the company and CTO, I am introducing innovative technologies to successfully bring Notify to market. Working closely with my co-founders, I am contributing to defining strategies and achieving business goals, applying leadership and technical skills to grow the company.`,
        }),
      },
      {
        title: this._lang.languageSensitiveText({
          en: 'Frontend Web Developer',
          it: 'Sviluppatore Web Frontend',
        }),
        dates: { from: new Date('2023-09-20'), to: new Date() },
        description: this._lang.languageSensitiveText({
          it: `Sviluppo software per istituti bancari utilizzando Raven, un’applicazione web basata su Angular e interna a TAS, progettata per lo sviluppo e il deployment di applicazioni frontend. Mi occupo inoltre della codebase stessa di Raven, applicando correzioni e introducendo nuove funzionalità`,
          en: `I am developing software for banking institutions using Raven, a web application based on Angular and internal to TAS, designed for the development and deployment of frontend applications. I am also managing the Raven codebase, applying fixes and introducing new features.`,
        }),
      },
      {
        title: this._lang.languageSensitiveText({
          en: 'Full Stack Web Developer',
          it: 'Sviluppatore Web full stack',
        }),
        dates: { from: new Date('2021-09-20'), to: new Date('2023-09-20') },
        description: this._lang.languageSensitiveText({
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
        title: this._lang.languageSensitiveText({
          en: 'Full Stack Web Developer',
          it: 'Sviluppatore Web full stack',
        }),
        dates: { from: new Date('2021-09-20'), to: new Date('2023-09-01') },
        description: this._lang.languageSensitiveText({
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
        title: this._lang.languageSensitiveText({
          en: 'Full Stack Web Developer',
          it: 'Sviluppatore Web full stack',
        }),
        isSideProject: true,
        dates: { from: new Date('2020-12-01'), to: new Date('2021-06-01') },
        description: this._lang.languageSensitiveText({
          it: `Sviluppo di back-end e front-end del sito Web di Legione Etruria ASD, usando vanilla JS con l'API Developer di Wix`,
          en: `Development of the back and front ends of the Legione Etruria ASD Web site, using vanilla JS with the Wix Developer API`,
        }),
      },
      {
        title: this._lang.languageSensitiveText({
          en: 'Internship as a C# developer',
          it: 'Stage come sviluppatore full-stack',
        }),
        dates: { from: new Date('2019-05-01'), to: new Date('2019-07-01') },
        description: this._lang.languageSensitiveText({
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
    return this._lang.languageSensitiveText({
      en: 'Ongoing',
      it: 'Oggi',
    });
  }

  public sideProjectTxt() {
    return this._lang.languageSensitiveText({
      en: 'Side project',
      it: 'Progetto personale',
    });
  }

  public title() {
    return this._lang.languageSensitiveText({
      en: 'Experience',
      it: 'Esperienza',
    });
  }
}
