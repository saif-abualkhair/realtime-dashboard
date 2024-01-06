import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart, { BubbleDataPoint, ChartConfiguration, ChartConfigurationCustomTypesPerDataset, ChartTypeRegistry, Point, TooltipItem, TooltipModel } from 'chart.js/auto';
import { MockupService } from '../../shared/services/mockup.service';
import { LiveEvents } from '../models/live-events';

@Component({
  selector: 'rd-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.scss']
})
export class LiveEventsComponent implements OnInit {

  liveEvents?: LiveEvents;
  chart!: Chart;
  hoverPointValue?: string;

  constructor(private mockupService: MockupService) { }


  ngOnInit() {
    this.getLiveEvents();

  }

  mountChart(frequencies: number[], times: string[]) {
    const ctx = (document.getElementById('canvas') as HTMLCanvasElement)?.getContext('2d');

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
        labels: times,
        datasets: [{
          data: frequencies,
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
  };

  onItemHover = (e: any, item: any) => {
    if (item.length > 0)
      this.hoverPointValue = this.liveEvents?.sosRaiseChart.times[item[0].index];
    else
      this.hoverPointValue = undefined;
  };

  getLiveEvents = () => {
    this.mockupService.getLiveEvents().subscribe(response => {
      this.liveEvents = response;
      this.mountChart(this.liveEvents.sosRaiseChart.frequencies, this.liveEvents.sosRaiseChart.times);
    })
  }

  createGradient = (ctx: CanvasRenderingContext2D) => {
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, 'rgba(242, 102, 102, 0.3)');
    gradient.addColorStop(1, 'rgba(242, 102, 102, 0)');

    return gradient;
  }
}
