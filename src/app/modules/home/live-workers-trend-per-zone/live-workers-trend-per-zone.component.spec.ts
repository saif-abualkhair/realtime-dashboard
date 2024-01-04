import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWorkersTrendPerZoneComponent } from './live-workers-trend-per-zone.component';

describe('LiveWorkersTrendPerZoneComponent', () => {
  let component: LiveWorkersTrendPerZoneComponent;
  let fixture: ComponentFixture<LiveWorkersTrendPerZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveWorkersTrendPerZoneComponent]
    });
    fixture = TestBed.createComponent(LiveWorkersTrendPerZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
