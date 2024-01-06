import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpComponent } from './components/count-up/count-up.component';
import { RelativeLoaderComponent } from './components/relative-loader/relative-loader.component';
import { InfoIconComponent } from './components/info-icon/info-icon.component';
import { CandleChartComponent } from './components/candle-chart/candle-chart.component';



@NgModule({
  declarations: [
    CountUpComponent,
    RelativeLoaderComponent,
    InfoIconComponent,
    CandleChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountUpComponent,
    RelativeLoaderComponent,
    InfoIconComponent,
    CandleChartComponent
  ]
})
export class SharedModule { }
