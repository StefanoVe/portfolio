import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() title = '';

  public h1Txt = {
    open: '<h1 class="my-auto text-5xl font-mono-display text-end uppercase text-transparent max-w-fit bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">',
    close: '</h1>',
  };
}
