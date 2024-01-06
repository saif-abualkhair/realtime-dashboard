import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpComponent } from './components/count-up/count-up.component';
import { RelativeLoaderComponent } from './components/relative-loader/relative-loader.component';
import { InfoIconComponent } from './components/info-icon/info-icon.component';



@NgModule({
  declarations: [
    CountUpComponent,
    RelativeLoaderComponent,
    InfoIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountUpComponent,
    RelativeLoaderComponent,
    InfoIconComponent
  ]
})
export class SharedModule { }
