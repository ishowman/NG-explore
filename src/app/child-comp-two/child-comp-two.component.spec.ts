import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompTwoComponent } from './child-comp-two.component';

describe('ChildCompTwoComponent', () => {
  let component: ChildCompTwoComponent;
  let fixture: ComponentFixture<ChildCompTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCompTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
