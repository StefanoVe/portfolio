import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public lastUpdate = '01/01/2023';

  public warningTextCode = {
    open: `<p class="my-8 text-lg text-end">`,
    close: `</p>`,
  };

  public skills: {
    language: string;
    recordedHours: number;
    color: string;
  }[] = [
    {
      language: 'TypeScript',
      recordedHours: 1200,
      //typescript color
      color: '#007ACC',
    },
    {
      language: 'HTML',
      recordedHours: 700,
      //html5 color
      color: '#E34F26',
    },
    {
      language: 'SCSS',
      recordedHours: 40,
      //scss color
      color: '#CC6699',
    },
    {
      language: 'C#',
      recordedHours: 50,
      //C# color
      color: '#239120',
    },
  ];

  constructor(public lang: LanguageService) {}

  public titleTxt() {
    return this.lang.languageSensitiveText({
      en: 'Skills',
      it: 'Abilità',
    });
  }

  public lastUpdateTxt() {
    return this.lang.languageSensitiveText({
      en: 'Last update on',
      it: 'Ultimo aggiornamento il',
    });
  }

  public totalHours() {
    return this.skills.reduce((acc, curr) => acc + curr.recordedHours, 0);
  }

  public hoursPercentage(recordedHours: number) {
    return (recordedHours / this.totalHours()) * 100;
  }

  public totalHoursTxt() {
    return this.lang.languageSensitiveText({
      en: 'Total hours spent coding',
      it: 'Ore totali passate a programmare',
    });
  }

  public warningTxt() {
    return this.lang.languageSensitiveText({
      it: "Dati approssimativi, basati sull'esperienza lavorativa e WakkaTime",
      en: 'Approximate data, based on professional experience and WakkaTime',
    });
  }
}
