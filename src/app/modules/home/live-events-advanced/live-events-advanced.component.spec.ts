import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveEventsAdvancedComponent } from './live-events-advanced.component';

describe('LiveEventsAdvancedComponent', () => {
  let component: LiveEventsAdvancedComponent;
  let fixture: ComponentFixture<LiveEventsAdvancedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveEventsAdvancedComponent]
    });
    fixture = TestBed.createComponent(LiveEventsAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
