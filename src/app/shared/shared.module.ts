import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultBackgroundComponent } from './components/default-background/default-background.component';
import { PersonalIconComponent } from './components/personal-icon/personal-icon.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';
import { ContactsStripComponent } from './components/contacts-strip/contacts-strip.component';

@NgModule({
  declarations: [
    DefaultBackgroundComponent,
    WallpaperComponent,
    PersonalIconComponent,
    ContactsStripComponent,
  ],
  imports: [CommonModule],
  exports: [
    DefaultBackgroundComponent,
    WallpaperComponent,
    PersonalIconComponent,
    ContactsStripComponent,
  ],
})
export class SharedModule {}
