import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBackgroundComponent } from './components/default-background/default-background.component';



@NgModule({
  declarations: [
    DefaultBackgroundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultBackgroundComponent
  ]
})
export class SharedModule { }
