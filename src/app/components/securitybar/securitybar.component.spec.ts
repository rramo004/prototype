import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritybarComponent } from './securitybar.component';

describe('SecuritybarComponent', () => {
  let component: SecuritybarComponent;
  let fixture: ComponentFixture<SecuritybarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritybarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
