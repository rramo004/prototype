import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsmComponent } from './tvsm.component';

describe('TvsmComponent', () => {
  let component: TvsmComponent;
  let fixture: ComponentFixture<TvsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
