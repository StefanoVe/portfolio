import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  public events: {
    title: string;
    dates: { from: Date; to: Date };
    description: string;
  }[] = [
    {
      title: 'PLACEHOLDER',
      dates: { from: new Date('2019-05-01'), to: new Date('2019-07-01') },
      description: 'I worked on a web application for a local company.',
    },
    {
      title: 'PLACEHOLDER',
      dates: { from: new Date('2019-05-01'), to: new Date('2019-07-01') },
      description: 'I worked on a web application for a local company.',
    },
  ];

  constructor(private _lang: LanguageService) {}
}
