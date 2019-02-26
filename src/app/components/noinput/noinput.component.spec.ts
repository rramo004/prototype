import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoinputComponent } from './noinput.component';

describe('NoinputComponent', () => {
  let component: NoinputComponent;
  let fixture: ComponentFixture<NoinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
