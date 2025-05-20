import { Component, inject } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
})
export class PhotosComponent {
  private _lang = inject(LanguageService);

  public get titleTxt() {
    return this._lang.languageSensitiveText({
      en: 'Photography',
      it: 'Fotografia',
    });
  }

  public get descriptionTxt() {
    return this._lang.languageSensitiveText({
      en: `Not really relevant to my work but I like to take photos. <br />
        I have a few shots here but my full collection is on
        <a href="https://glass.photo/ohvecho" class="underline">Glass</a>`,
      it: `Non è davvero rilevante per il mio lavoro, ma mi adoro scattare foto. <br />
        Ne ho alcune foto qui, ma la mia collezione completa è su
        <a href="https://glass.photo/ohvecho" class="underline">Glass</a>`,
    });
  }
}
