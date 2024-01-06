import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { MockupService } from '../../shared/services/mockup.service';
import { LiveWorkersTrendPerZone } from '../models/live-workers-trend-per-zone';

@Component({
  selector: 'rd-live-workers-trend-per-zone',
  templateUrl: './live-workers-trend-per-zone.component.html',
  styleUrls: ['./live-workers-trend-per-zone.component.scss']
})
export class LiveWorkersTrendPerZoneComponent {
  chart!: Chart;
  liveWorkersTrendPerZone?: LiveWorkersTrendPerZone;

  constructor(private mockupService: MockupService) { }

  ngOnInit() {
    this.getLiveWorkersTrendPerZone();

  }

  getLiveWorkersTrendPerZone = () => {
    this.mockupService.getLiveWorkersTrendPerZone().subscribe(response => {
      this.liveWorkersTrendPerZone = response;
      this.createChart(response);
    });
  };

  createChart(liveWorkersTrendPerZone: LiveWorkersTrendPerZone) {
    const ctx = (document.getElementById('liveWorkersTrendPerZoneChart') as HTMLCanvasElement)?.getContext('2d');
    this.chart = new Chart(ctx!, {
      type: 'line',
      options: {
        scales: {
          x: {
            grid: {
              color: "rgba(220, 220, 220, 0)"
            },
            ticks: {
              color: '#B2BAC9',
            }
          },
          y: {
            grid: {
              color: '#525A6B',
            },
            border: {
              dash: [4, 2],
            },
            beginAtZero: true,
            ticks: {
              stepSize: 10,
              color: '#B2BAC9'
            }
          }
        },
        plugins: {
          tooltip: {
            backgroundColor: 'rgba(60, 67, 82, 0.9)',
            callbacks: {
              label: (context) => {
                const date = '22 Dec 2021';
                const selectedEmployees = 'Selected Employees: ' + context.dataset.data[context.dataIndex] + '%';
                const groupAverage = 'Group Average: ' + context.dataset.data[context.dataIndex] + '%';
                return [date, selectedEmployees, groupAverage];
              },
              title: () => null!,

            },
            displayColors: false
          },
          legend: {
            position: 'top',
            align: 'end',
            labels: {
              color: '#fff',
              boxWidth: 12,
              boxHeight: 12,
              generateLabels: function (chart) {
                return chart.data.datasets.map((dataset, index) => {
                  return {
                    text: dataset.label,
                    fontColor: "#B2BAC9",
                    fillStyle: dataset.borderColor,
                    lineWidth: 4,
                    hidden: dataset.hidden,
                    strokeStyle: dataset.borderColor,
                    pointStyle: 'rectRot',
                    borderRadius: 4,
                    datasetIndex: index
                  } as any
                });

              }
            }
          },
        },
      },
      data: {
        labels: liveWorkersTrendPerZone.timestamps,
        datasets: [
          {
            label: 'Green Zone',
            borderColor: '#66c088',
            borderWidth: 1,
            data: liveWorkersTrendPerZone.greenZone,
            fill: false,
          },
          {
            label: 'Amber Zone',
            borderColor: '#da7739',
            borderWidth: 1,
            borderDash: [4, 4],
            data: liveWorkersTrendPerZone.amberZone,
            fill: false
          },
          {
            label: 'Red Zone',
            borderColor: '#bc4c34',
            borderWidth: 1,
            data: liveWorkersTrendPerZone.redZone,
            fill: false
          }
        ]
      },
    });
  }
}