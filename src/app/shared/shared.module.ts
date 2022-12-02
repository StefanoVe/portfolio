import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBackgroundComponent } from './components/default-background/default-background.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';



@NgModule({
  declarations: [
    DefaultBackgroundComponent,
    WallpaperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultBackgroundComponent,
    WallpaperComponent
  ]
})
export class SharedModule { }
