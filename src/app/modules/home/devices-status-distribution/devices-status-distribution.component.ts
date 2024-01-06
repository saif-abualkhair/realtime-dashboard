import { Component, OnInit } from '@angular/core';
import { MockupService } from '../../shared/services/mockup.service';
import { DevicesStatusDistribution } from '../models/devices-status-distribution';

@Component({
  selector: 'rd-devices-status-distribution',
  templateUrl: './devices-status-distribution.component.html',
  styleUrls: ['./devices-status-distribution.component.scss']
})
export class DevicesStatusDistributionComponent implements OnInit {
  devicesStatusDistribution?: DevicesStatusDistribution;

  constructor(private mockupService: MockupService) { }

  ngOnInit(): void {
    this.getDevicesStatusDistribution();
  }

  getDevicesStatusDistribution() {
    this.mockupService.getDevicesStatusDistribution().subscribe(response => {
      this.devicesStatusDistribution = response;
    });
  }

}
