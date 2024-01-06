import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart, { BubbleDataPoint, ChartConfiguration, ChartConfigurationCustomTypesPerDataset, ChartTypeRegistry, Point, TooltipItem, TooltipModel } from 'chart.js/auto';

@Component({
  selector: 'rd-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.scss']
})
export class LiveEventsComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    
  }
  chart: any = []
  hoverPointValue?: string;

  timestamps: string[] = [
    '12:45:25 am',
    '05:04:12 am',
    '12:01:02 pm',
    '05:04:12 pm',
    '09:43:10 pm',
    '10:04:12 pm',
    '02:02:10 am',
  ];


  onItemHover = (e: any, item: any) => {
    if (item.length > 0)
      this.hoverPointValue = this.timestamps[item[0].index];
    else
      this.hoverPointValue = undefined;
  };

  ngOnInit() {
    var ctx = (document.getElementById('canvas') as HTMLCanvasElement)?.getContext('2d');

    let data = [
      12, 20, 15, 14, 18, 10, 5
    ];
    const config: ChartConfiguration = {
      type: 'line',
      options: {
        hover: {
          mode: 'nearest',
          intersect: true
        },
        elements: {
          point: {
            radius: 0
          }
        },
        onHover: this.onItemHover,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false,
          },

        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false
            }
          },
          y: {
            display: false,
            grid: {
              display: false
            }
          }
        },
      },

      data: {
        labels: this.timestamps,
        datasets: [{
          data: data,
          fill: true,
          borderColor: '#e24917',
          tension: 0.1,
          borderWidth: 1.5,
          backgroundColor: this.createGradient(ctx!),
          pointRadius: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'rgba(242, 102, 102, 0.7)'
        }],

      },
    };
    this.chart = new Chart(ctx!, config);
  }

  createGradient = (ctx: CanvasRenderingContext2D) => {
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(242, 102, 102, 0.3)');
    gradient.addColorStop(1, 'rgba(242, 102, 102, 0)');

    return gradient;
  }
}
