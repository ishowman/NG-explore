import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompOneComponent } from './child-comp-one.component';

describe('ChildCompOneComponent', () => {
  let component: ChildCompOneComponent;
  let fixture: ComponentFixture<ChildCompOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCompOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
