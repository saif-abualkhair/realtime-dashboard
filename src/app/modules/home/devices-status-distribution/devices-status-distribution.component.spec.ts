import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesStatusDistributionComponent } from './devices-status-distribution.component';

describe('DevicesStatusDistributionComponent', () => {
  let component: DevicesStatusDistributionComponent;
  let fixture: ComponentFixture<DevicesStatusDistributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevicesStatusDistributionComponent]
    });
    fixture = TestBed.createComponent(DevicesStatusDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
