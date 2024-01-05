import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, delay, take } from 'rxjs';
import { Activity } from '../../home/models/activity';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  private getRandomNumber = (firstLimit: number, lastLimit: number) => Math.floor(Math.random() * (lastLimit - firstLimit + 1) + firstLimit);

  private randomize = (arg0: string[]): string => arg0[this.getRandomNumber(0, arg0.length - 1)];

  private stageSubject = <T>(obj: T) => new BehaviorSubject<T>(obj).pipe(delay(this.getRandomNumber(2, 5) * 1000), take(1));

  getActivity = () => this.stageSubject<Activity>({
    name: this.randomize(['A Site', 'B Site', 'C Site']),
    activeDevices: this.getRandomNumber(900, 1500),
    activePeople: this.getRandomNumber(900, 1500),
    description: this.randomize(['RR1 Area', 'RR2 Area', 'RR3 Area'])
  });

}
