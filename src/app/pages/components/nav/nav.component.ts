import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  public navItems: { label: string; routerPath: string }[] = [];

  private destroy$ = new Subject<void>();

  constructor(private lang: LanguageService) {}

  ngOnInit(): void {
    this.lang.languageChanges
      .pipe(
        takeUntil(this.destroy$),
        tap(
          () =>
            (this.navItems = [
              {
                label: this.lang._languageSensitiveText({
                  en: 'About',
                  it: 'Su di me',
                }),
                routerPath: '/about',
              },
              {
                label: this.lang._languageSensitiveText({
                  en: 'Projects',
                  it: 'Progetti',
                }),
                routerPath: '/projects',
              },
              {
                label: this.lang._languageSensitiveText({
                  en: 'Resume',
                  it: 'Curriculum',
                }),
                routerPath: '/resume',
              },
              {
                label: this.lang._languageSensitiveText({
                  en: 'Contacts',
                  it: 'Contatti',
                }),
                routerPath: '/contacts',
              },
            ])
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
     * example:
     *    item1 (0)
     *  item2 (15)
     * item3 (30)
     * item4 (30)
     *  item5 (15)
     *   item6 (0)
     */

    const totalItems = this.navItems.length;
    const halfItems = Math.floor(totalItems / 2);
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
    return this.lang._languageSensitiveText({
      en: 'Home',
      it: 'Home',
    });
  }
}
