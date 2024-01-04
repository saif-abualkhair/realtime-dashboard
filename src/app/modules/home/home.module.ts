import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { LiveEventsComponent } from './live-events/live-events.component';
import { DevicesStatusDistributionComponent } from './devices-status-distribution/devices-status-distribution.component';
import { WeatherComponent } from './weather/weather.component';
import { LiveWorkersTrendPerZoneComponent } from './live-workers-trend-per-zone/live-workers-trend-per-zone.component';
import { CriticalMissionComponent } from './critical-mission/critical-mission.component';
import { LiveEventsAdvancedComponent } from './live-events-advanced/live-events-advanced.component';


@NgModule({
  declarations: [
    HomeComponent,
    ActivityComponent,
    LiveEventsComponent,
    DevicesStatusDistributionComponent,
    WeatherComponent,
    LiveWorkersTrendPerZoneComponent,
    CriticalMissionComponent,
    LiveEventsAdvancedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
