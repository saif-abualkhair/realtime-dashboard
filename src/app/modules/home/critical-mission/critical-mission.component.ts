import { Component, OnInit } from '@angular/core';
import { MockupService } from '../../shared/services/mockup.service';
import { CrictalMissionUpdate } from '../models/crical-mission-update';

@Component({
  selector: 'rd-critical-mission',
  templateUrl: './critical-mission.component.html',
  styleUrls: ['./critical-mission.component.scss']
})
export class CriticalMissionComponent implements OnInit {
  criticalMissionsUpdates?: CrictalMissionUpdate[];


  constructor(private mockupService: MockupService) { }

  ngOnInit(): void {
    this.getCriticalMissionsUpdates();
  }

  getCriticalMissionsUpdates = () => {
    this.mockupService.getCriticalMissionsUpdates().subscribe(response => {
      this.criticalMissionsUpdates = response;
    });
  };


}
