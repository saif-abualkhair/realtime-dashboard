import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, delay, take } from 'rxjs';
import { Activity } from '../../home/models/activity';
import { LiveEvents } from '../../home/models/live-events';
import { DevicesStatusDistribution } from '../../home/models/devices-status-distribution';
import { Weather } from '../../home/models/weather';
import { CrictalMissionUpdate } from '../../home/models/crical-mission-update';
import { LiveWorkersTrendPerZone } from '../../home/models/live-workers-trend-per-zone';
import { LiveEventsAdvanced } from '../../home/models/live-events-advanced';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  private getRandomNumber = (firstLimit: number, lastLimit: number, hasDecimals: boolean) => {
    let random = Math.random() * (lastLimit - firstLimit + 1) + firstLimit;
    return hasDecimals ? random : Math.floor(random);
  }

  private randomize = (arg0: string[]): string => arg0[this.getRandomNumber(0, arg0.length - 1, false)];

  private stageSubject = <T>(obj: T) => new BehaviorSubject<T>(obj).pipe(delay(this.getRandomNumber(2, 5, false) * 1000), take(1));

  getActivity = () => this.stageSubject<Activity>({
    name: this.randomize(['A Site', 'B Site', 'C Site']),
    activeDevices: this.getRandomNumber(900, 1500, false),
    activePeople: this.getRandomNumber(900, 1500, false),
    description: this.randomize(['RR1 Area', 'RR2 Area', 'RR3 Area'])
  });

  getLiveEvents = () => this.stageSubject<LiveEvents>({
    info: {
      total: this.getRandomNumber(1, 30, false),
      percentageChange: this.getRandomNumber(1, 100, true),
    },
    alerts: {
      total: this.getRandomNumber(1, 30, false),
      percentageChange: this.getRandomNumber(1, 100, true),
    },
    alarms: {
      total: this.getRandomNumber(1, 30, false),
      percentageChange: this.getRandomNumber(1, 100, true),
    },
    sosRaiseChart: {
      times: [
        `${this.getRandomNumber(10, 12, false)}:${this.getRandomNumber(10, 59, false)}:${this.getRandomNumber(10, 59, false)} ${this.randomize(['am', 'pm'])}`,
        `${this.getRandomNumber(10, 12, false)}:${this.getRandomNumber(10, 59, false)}:${this.getRandomNumber(10, 59, false)} ${this.randomize(['am', 'pm'])}`,
        `${this.getRandomNumber(10, 12, false)}:${this.getRandomNumber(10, 59, false)}:${this.getRandomNumber(10, 59, false)} ${this.randomize(['am', 'pm'])}`,
        `${this.getRandomNumber(10, 12, false)}:${this.getRandomNumber(10, 59, false)}:${this.getRandomNumber(10, 59, false)} ${this.randomize(['am', 'pm'])}`,
        `${this.getRandomNumber(10, 12, false)}:${this.getRandomNumber(10, 59, false)}:${this.getRandomNumber(10, 59, false)} ${this.randomize(['am', 'pm'])}`,
        `${this.getRandomNumber(10, 12, false)}:${this.getRandomNumber(10, 59, false)}:${this.getRandomNumber(10, 59, false)} ${this.randomize(['am', 'pm'])}`,
        `${this.getRandomNumber(10, 12, false)}:${this.getRandomNumber(10, 59, false)}:${this.getRandomNumber(10, 59, false)} ${this.randomize(['am', 'pm'])}`,
      ],
      frequencies: [
        this.getRandomNumber(1, 15, false),
        this.getRandomNumber(10, 30, false),
        this.getRandomNumber(10, 30, false),
        this.getRandomNumber(10, 30, false),
        this.getRandomNumber(10, 30, false),
        this.getRandomNumber(10, 30, false),
        this.getRandomNumber(1, 15, false),
      ]
    },
  });

  getDevicesStatusDistribution = () => this.stageSubject<DevicesStatusDistribution>({
    assignedCount: this.getRandomNumber(500, 999, false),
    idleCount: this.getRandomNumber(100, 499, false),
    othersCount: this.getRandomNumber(40, 99, false),
  });

  getWeather = () => this.stageSubject<Weather>({
    geoAddress: 'Jordan, Amman',
    currentTemperature: this.getRandomNumber(2, 25, false),
    nextHoursTemperature: [
      {
        time: this.getRandomNumber(1, 12, false),
        temperature: this.getRandomNumber(2, 25, false),
      },
      {
        time: this.getRandomNumber(1, 12, false),
        temperature: this.getRandomNumber(2, 25, false),
      },
      {
        time: this.getRandomNumber(1, 12, false),
        temperature: this.getRandomNumber(2, 25, false),
      },
      {
        time: this.getRandomNumber(1, 12, false),
        temperature: this.getRandomNumber(2, 25, false),
      },
      {
        time: this.getRandomNumber(1, 12, false),
        temperature: this.getRandomNumber(2, 25, false),
      },
      {
        time: this.getRandomNumber(1, 12, false),
        temperature: this.getRandomNumber(2, 25, false),
      },
      {
        time: this.getRandomNumber(1, 12, false),
        temperature: this.getRandomNumber(2, 25, false),
      },
    ]
  });

  getCriticalMissionsUpdates = () => this.stageSubject<CrictalMissionUpdate[]>([
    {
      imageUrl: 'assets/images/critical-mission-user-update-profile-picture-1.png',
      name: 'Mohammad Yousef Ali',
      role: 'HSE Manager',
      lastUpdateTimeStamp: '01:44'
    },
    {
      imageUrl: 'assets/images/critical-mission-user-update-profile-picture-2.png',
      name: 'Saleem Mohammad Sami',
      role: 'Safety Supervision',
      lastUpdateTimeStamp: '01:20'
    },
    {
      imageUrl: 'assets/images/critical-mission-user-update-profile-picture-3.png',
      name: 'Sami Hamad Ali',
      role: 'Operator',
      lastUpdateTimeStamp: '00.45'
    },
    {
      imageUrl: 'assets/images/critical-mission-user-update-profile-picture-4.png',
      name: 'Osama Omar Ibrahem',
      role: 'Maintenance Engineer',
      lastUpdateTimeStamp: '00:35'
    },
  ]);

  getLiveWorkersTrendPerZone = () => this.stageSubject<LiveWorkersTrendPerZone>({
    timestamps: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
    greenZone: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    amberZone: [30, 40, 50, 60, 70, 80, 90, 100, 10, 20],
    redZone: [50, 60, 70, 80, 90, 100, 10, 20, 30, 40],
  });

  getLiveEventsAdvanced = () => this.stageSubject<LiveEventsAdvanced>({
    totalAlerts: {
      totalNumber: this.getRandomNumber(300, 399, false),
      percentage: this.getRandomNumber(1, 100, true),
    },
    totalAlarms: {
      totalNumber: this.getRandomNumber(400, 799, false),
      percentage: this.getRandomNumber(1, 100, true),
    },
    previousYearTotal: {
      totalNumber: this.getRandomNumber(800, 1200, false),
      percentage: this.getRandomNumber(1, 100, true),
    },
    totalEvents: this.getRandomNumber(999, 1000, false),
    dataSets: {
      values: [
        this.getRandomNumber(500, 1000, false),
        this.getRandomNumber(500, 1000, false),
        this.getRandomNumber(500, 1000, false),
      ],
      backgroundColors: ['#5991e2', '#da7739', '#bc4c34'],
    },
    SitesStatistics: [
      {
        name: 'Site 1',
        totalEvents: this.getRandomNumber(1, 100, false),
        isDecrease: this.getRandomNumber(1, 2, false) % 2 === 0,
        PrevYear: {
          percentage1: this.getRandomNumber(1, 100, true),
          percentage2: this.getRandomNumber(1, 100, true),
        },
        grpAvg: {
          percentage1: this.getRandomNumber(1, 100, true),
          percentage2: this.getRandomNumber(1, 100, true),
        },
        dataSets: {
          values: [
            {
              value: this.getRandomNumber(500, 1000, false),
              color: '#5991e2',
            },
            {
              value: this.getRandomNumber(500, 1000, false),
              color: '#da7739',
            },
            {
              value: this.getRandomNumber(500, 1000, false),
              color: '#bc4c34',
            }
          ],
        },
      },
      {
        name: 'Site 2',
        totalEvents: this.getRandomNumber(1, 100, false),
        isDecrease: this.getRandomNumber(1, 2, false) % 2 === 0,
        PrevYear: {
          percentage1: this.getRandomNumber(1, 100, true),
          percentage2: this.getRandomNumber(1, 100, true),
        },
        grpAvg: {
          percentage1: this.getRandomNumber(1, 100, true),
          percentage2: this.getRandomNumber(1, 100, true),
        },
        dataSets: {
          values: [
            {
              value: this.getRandomNumber(500, 1000, false),
              color: '#5991e2',
            },
            {
              value: this.getRandomNumber(500, 1000, false),
              color: '#bc4c34',
            },
            {
              value: this.getRandomNumber(500, 1000, false),
              color: '#bc4c34',
            },
          ],
        },
      },
      {
        name: 'Site 3',
        totalEvents: this.getRandomNumber(1, 100, false),
        isDecrease: this.getRandomNumber(1, 2, false) % 2 === 0,
        PrevYear: {
          percentage1: this.getRandomNumber(1, 100, true),
          percentage2: this.getRandomNumber(1, 100, true),
        },
        grpAvg: {
          percentage1: this.getRandomNumber(1, 100, true),
          percentage2: this.getRandomNumber(1, 100, true),
        },
        dataSets: {
          values: [
            {
              value: this.getRandomNumber(500, 1000, false),
              color: '#5991e2',
            },
            {
              value: this.getRandomNumber(500, 1000, false),
              color: '#bc4c34',
            },
          ],
        },
      },
      {
        name: 'Site 4',
        totalEvents: this.getRandomNumber(1, 100, false),
        isDecrease: this.getRandomNumber(1, 2, false) % 2 === 0,
        PrevYear: {
          percentage1: this.getRandomNumber(1, 100, true),
          percentage2: this.getRandomNumber(1, 100, true),
        },
        grpAvg: {
          percentage1: this.getRandomNumber(1, 100, true),
          percentage2: this.getRandomNumber(1, 100, true),
        },
        dataSets: {
          values: [
            {
              value: this.getRandomNumber(500, 1000, false),
              color: '#5991e2',
            },
            {
              value: this.getRandomNumber(500, 1000, false),
              color: '#bc4c34',
            },
          ],
        },
      },
    ]

  });
}
