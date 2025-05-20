import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  public navItems: {
    label: string;
    routerPath: string;
    fragment?: string;
    spacing: number;
  }[] = [];

  private destroy$ = new Subject<void>();

  constructor(private lang: LanguageService) {}

  ngOnInit(): void {
    this.lang.currentLanguage$
      .pipe(
        takeUntil(this.destroy$),
        tap(
          () =>
            (this.navItems = [
              {
                label: this.lang.languageSensitiveText({
                  en: 'About',
                  it: 'Su di me',
                }),
                spacing: 0,
                routerPath: '/about',
              },

              {
                label: this.lang.languageSensitiveText({
                  en: 'Experience',
                  it: 'Esperienza',
                }),
                spacing: 16,
                routerPath: '/experience',
              },
              {
                label: this.lang.languageSensitiveText({
                  en: 'Skills',
                  it: 'Abilità',
                }),
                spacing: 32,
                routerPath: '/skills',
              },
              {
                label: this.lang.languageSensitiveText({
                  en: 'Tools',
                  it: 'Strumenti',
                }),
                spacing: 32,
                routerPath: '/tools',
              },
              {
                label: this.lang.languageSensitiveText({
                  en: 'Photography',
                  it: 'Fotografia',
                }),
                spacing: 16,
                routerPath: '/photography',
              },
              {
                label: this.lang.languageSensitiveText({
                  en: 'Contact',
                  it: 'Contattami',
                }),
                spacing: 0,
                routerPath: '/contact',
              },
            ].map((i) => ({ ...i, fragment: 't' })))
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public handleRotation(index: number) {
    //a formula that applies an amount of spacing to each item in the nav to create a rotation effect
    //if the current index is more than half of the total items, then the rotation must be less than the previous item
    //the first item is always at 0 rotation, the last item is always at 0 rotation
    /**
     * example 1:
     *    item1 (0)
     *  item2 (15)
     * item3 (30)
     * item4 (30)
     *  item5 (15)
     *   item6 (0)
     *
     * example 2:
     *    item1 (0)
     *  item2 (15)
     * item3 (30)
     *  item4 (15)
     *    item5 (0)
     */

    const totalItems = this.navItems.length;
    const halfItems = Math.ceil(totalItems / 2);
    const rotation = 30;

    if (index === 0 || index === totalItems - 1) {
      return 0;
    }

    if (index >= halfItems) {
      return (index + 1 - halfItems) * rotation;
    }

    return index * rotation;
  }

  public homeTxt() {
    return this.lang.languageSensitiveText({
      en: 'Home',
      it: 'Home',
    });
  }
}
