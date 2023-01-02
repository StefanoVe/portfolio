import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultBackgroundComponent } from './components/default-background/default-background.component';
import { PersonalIconComponent } from './components/personal-icon/personal-icon.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';

@NgModule({
  declarations: [
    DefaultBackgroundComponent,
    WallpaperComponent,
    PersonalIconComponent,
  ],
  imports: [CommonModule],
  exports: [
    DefaultBackgroundComponent,
    WallpaperComponent,
    PersonalIconComponent,
  ],
})
export class SharedModule {}
