import { async, ComponentFixture, TestBed, tick, fakeAsync, discardPeriodicTasks } from '@angular/core/testing';

import { MockTimerComponent } from './mock-timer.component';

describe('MockTimerComponent', () => {
  let component: MockTimerComponent;
  let fixture: ComponentFixture<MockTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test discardChanges', fakeAsync(() => {
    expect(component.showSpinner).toBeFalsy();
    component.discardChanges()
    expect(component.showSpinner).toBeTruthy();
    tick(1000);
    expect(component.showSpinner).toBeFalsy();
    discardPeriodicTasks()
  }));
});
