import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  public animationMs = 1000;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public returnToHome() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, this.animationMs);
  }
}
