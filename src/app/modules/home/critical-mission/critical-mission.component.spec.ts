import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalMissionComponent } from './critical-mission.component';

describe('CriticalMissionComponent', () => {
  let component: CriticalMissionComponent;
  let fixture: ComponentFixture<CriticalMissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriticalMissionComponent]
    });
    fixture = TestBed.createComponent(CriticalMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
