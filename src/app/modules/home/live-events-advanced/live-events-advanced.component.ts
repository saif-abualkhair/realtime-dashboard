import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'rd-live-events-advanced',
  templateUrl: './live-events-advanced.component.html',
  styleUrls: ['./live-events-advanced.component.scss']
})
export class LiveEventsAdvancedComponent {
  chart!: Chart;

  ngOnInit() {
    const ctx = (document.getElementById('liveEventsAdvancedChart') as HTMLCanvasElement)?.getContext('2d');

    new Chart(ctx!, {
      type: 'doughnut',
      data: {
        labels: ['Primary', 'Amber', 'Red'],
        datasets: [{
          data: [841, 270, 200],
          backgroundColor: ['#5991e2', '#da7739', '#bc4c34'],
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
  }
}
