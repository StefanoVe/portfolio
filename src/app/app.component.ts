import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public waitingDots = '';

  //perpetual timer
  constructor() {
    this._timer();
  }

  private _timer() {
    setTimeout(() => {
      this.waitingDots += '.';

      if (this.waitingDots.length > 3) {
        this.waitingDots = '';
      }

      this._timer();
    }, 500);
  }
}
