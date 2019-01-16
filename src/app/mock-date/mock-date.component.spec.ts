import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { MockDateComponent } from './mock-date.component';

describe('MockDateComponent', () => {
  let component: MockDateComponent;
  let fixture: ComponentFixture<MockDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // jasmine.clock().uninstall();
    // jasmine.clock().install();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init date with current timestamp', () => {
    jasmine.clock().mockDate(new Date(1546263001000));
    component.initDate();
    expect(component.date).toBe(1546263001000);
  });

  it('should new Date equal to mockDate', () => {
    jasmine.clock().mockDate(new Date(1546263001000));
    expect(new Date().getTime()).toBe(1546263001000);
  });

  it("should get date diff correctly", fakeAsync(() => {
    const start = Date.now();
    tick(1000);
    const end = Date.now();
    expect(end - start).toBe(1000)
  }))

  // afterEach(() => {
  //   jasmine.clock().uninstall();
  // });
});
