import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadlComponent } from './madl.component';

describe('MadlComponent', () => {
  let component: MadlComponent;
  let fixture: ComponentFixture<MadlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
