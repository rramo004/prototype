import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadlsublinksComponent } from './madlsublinks.component';

describe('MadlsublinksComponent', () => {
  let component: MadlsublinksComponent;
  let fixture: ComponentFixture<MadlsublinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadlsublinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadlsublinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
