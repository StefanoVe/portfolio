import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router, Scroll } from '@angular/router';
import { Subject, take, tap } from 'rxjs';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements AfterViewInit, OnDestroy {
  @ViewChild('titleRef') titleRef!: ElementRef;
  @Input() title = '';

  public h1Txt = {
    open: '<h1 class="my-auto text-5xl font-mono-display text-end uppercase text-transparent max-w-fit bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">',
    close: '</h1>',
  };

  private _destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    this.router.events
      .pipe(
        take(1),
        tap((val) => {
          if (!(val instanceof Scroll)) {
            return;
          }

          this._handleFocus();
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _handleFocus() {
    const fragment = this.route.snapshot.fragment;

    if (!fragment || !fragment.includes('t')) {
      return;
    }

    if (!window.matchMedia('(max-width: 768px)').matches) {
      return;
    }

    console.log(this.titleRef);
    this.titleRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
