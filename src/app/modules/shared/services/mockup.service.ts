import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, delay, take } from 'rxjs';
import { Activity } from '../../home/models/activity';
import { LiveEvents } from '../../home/models/live-events';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  // private getRandomNumber = (firstLimit: number, lastLimit: number) => Math.floor(Math.random() * (lastLimit - firstLimit + 1) + firstLimit);
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

}
