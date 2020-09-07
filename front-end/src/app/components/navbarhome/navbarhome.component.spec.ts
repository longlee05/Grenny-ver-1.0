import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarhomeComponent } from './navbarhome.component';

describe('NavbarhomeComponent', () => {
  let component: NavbarhomeComponent;
  let fixture: ComponentFixture<NavbarhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});