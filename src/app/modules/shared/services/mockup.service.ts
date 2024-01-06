import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, delay, take } from 'rxjs';
import { Activity } from '../../home/models/activity';
import { LiveEvents } from '../../home/models/live-events';
import { DevicesStatusDistribution } from '../../home/models/devices-status-distribution';
import { Weather } from '../../home/models/weather';
import { CrictalMissionUpdate } from '../../home/models/crical-mission-update';

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
}
