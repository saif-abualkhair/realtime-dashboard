import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MockupService } from '../../shared/services/mockup.service';
import { LiveEventsAdvanced } from '../models/live-events-advanced';

@Component({
  selector: 'rd-live-events-advanced',
  templateUrl: './live-events-advanced.component.html',
  styleUrls: ['./live-events-advanced.component.scss']
})
export class LiveEventsAdvancedComponent {
  chart!: Chart;
  liveEventsAdvanced?: LiveEventsAdvanced;

  constructor(private mockupService: MockupService) { }

  ngOnInit() {
    this.mockupService.getLiveEventsAdvanced().subscribe(response => {
      this.liveEventsAdvanced = response;
      console.log(this.liveEventsAdvanced.SitesStatistics[0].grpAvg)
      this.mountChart(this.liveEventsAdvanced!);
    });
  }

  mountChart(liveEventsAdvanced: LiveEventsAdvanced) {
    const ctx = (document.getElementById('liveEventsAdvancedChart') as HTMLCanvasElement)?.getContext('2d');

    new Chart(ctx!, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: liveEventsAdvanced.dataSets.values,
          backgroundColor: liveEventsAdvanced.dataSets.backgroundColors,
          borderWidth: 0
        }]
      },
      options: {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return '';
              },
              title: (context) => {
                if (context.length > 0) {
                  return context[0].raw as string;
                }
                return '';
              },
            },
            backgroundColor: 'rgba(0, 0, 0, 0)',
          }
        }
      },
    });
  };
}
