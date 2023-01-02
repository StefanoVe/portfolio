import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('skillsContainer') skillsContainer!: ElementRef<HTMLElement>;
  @ViewChild('totalHoursText') totalHoursText!: ElementRef<HTMLElement>;
  @ViewChildren('progressText') progressText!: ElementRef<HTMLElement>[];

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
      language: 'C#',
      recordedHours: 50,
      //C# color
      color: '#239120',
    },
    {
      language: 'SCSS',
      recordedHours: 40,
      //scss color
      color: '#CC6699',
    },
  ];

  constructor(public lang: LanguageService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.skillsContainer.nativeElement.style.width = '100%';
      this.skillsContainer.nativeElement.style.transitionDuration = '1.5s';

      this.totalHoursText.nativeElement.style.opacity = '1';
      this.totalHoursText.nativeElement.style.transform = 'translateX(0rem)';

      this.progressText.forEach((progressText, index) => {
        setTimeout(() => {
          progressText.nativeElement.style.opacity = '1';
          progressText.nativeElement.style.transform = 'translateX(0rem)';
        }, (index + 1) * 400);
      });
    }, 1);
  }

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
