import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public navItems: { label: string; routerPath: string }[] = [
    {
      label: 'Home',
      routerPath: '/landing',
    },
    {
      label: 'About me',
      routerPath: '/about',
    },
    {
      label: 'Projects',
      routerPath: '/projects',
    },
    {
      label: 'Resume',
      routerPath: '/resume',
    },
    {
      label: 'Contacts',
      routerPath: '/contacts',
    },
  ];

  constructor() {}

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
    const rotation = 15;

    if (index === 0 || index === totalItems - 1) {
      return 0;
    }

    if (index > halfItems) {
      return (index - halfItems) * rotation;
    }

    return index * rotation;
  }
}
