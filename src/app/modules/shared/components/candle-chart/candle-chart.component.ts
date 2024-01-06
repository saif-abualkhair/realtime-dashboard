import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CandleChart } from '../../models/candle-chart';

@Component({
  selector: 'rd-candle-chart',
  templateUrl: './candle-chart.component.html',
  styleUrls: ['./candle-chart.component.scss']
})
export class CandleChartComponent implements OnChanges {

  @Input() value?: CandleChart[];
  context?: {
    percentage: string;
    percentageColor: string;
    value:number
  }[]

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']?.currentValue) {
      this.calculateContext();
    }
  }

  calculateContext = () => {
    //calcualte the total of the values
    const total = this.value?.reduce((acc, cur) => acc + cur.value, 0);
    //calculate the percentage of each value and sort from highest to lowest numbers
    this.context = this.value?.sort((a,b) =>{
      return b.value - a.value;
    })
      .map((item) => {
        return {
          percentage: `${(item.value / total!) * 100}%`,
          percentageColor: `#${item.color}`,
          value: item.value
        }
      });
    console.log(this.context);
  };

  ngOnInit(): void {

  }
}