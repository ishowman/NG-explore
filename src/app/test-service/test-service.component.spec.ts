import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../model/user.service';

import { TestServiceComponent } from './test-service.component';

describe('TestServiceComponent', () => {
  let component: TestServiceComponent;
  let fixture: ComponentFixture<TestServiceComponent>;
  let userServiceStub: Partial<UserService>;
  let userService
  let el

  beforeEach(async(() => {
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };
  

    TestBed.configureTestingModule({
      declarations: [ TestServiceComponent ],
      providers:    [ 
        {provide: UserService, useValue: userServiceStub } 
      ]

    })
    .compileComponents();

    userService = TestBed.get(UserService);


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestServiceComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement.querySelector('.welcome');

    // fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome', '"Welcome ..."');
    expect(content).toContain('Test User', 'expected name');
  });
  
  it('should welcome "Bubba"', () => {
    userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
    fixture.detectChanges();
    expect(el.textContent).toContain('Bubba');
  });
  
  it('should request login if not logged in', () => {
    userService.isLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  });
});
