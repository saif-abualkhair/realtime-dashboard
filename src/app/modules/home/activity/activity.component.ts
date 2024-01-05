import { Component, OnInit } from '@angular/core';
import { MockupService } from '../../shared/services/mockup.service';
import { Activity } from '../models/activity';

@Component({
  selector: 'rd-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activity?: Activity;

  constructor(private mockupService: MockupService) { }

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity = () => {
    this.mockupService.getActivity().subscribe(activity => {
      this.activity = activity;
      console.log(this.activity)
    });
  }



}