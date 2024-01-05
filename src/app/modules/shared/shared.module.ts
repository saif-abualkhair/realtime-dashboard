import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpComponent } from './components/count-up/count-up.component';
import { RelativeLoaderComponent } from './components/relative-loader/relative-loader.component';



@NgModule({
  declarations: [
    CountUpComponent,
    RelativeLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountUpComponent,
    RelativeLoaderComponent
  ]
})
export class SharedModule { }
