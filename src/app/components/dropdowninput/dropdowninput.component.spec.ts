import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowninputComponent } from './dropdowninput.component';

describe('DropdowninputComponent', () => {
  let component: DropdowninputComponent;
  let fixture: ComponentFixture<DropdowninputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdowninputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowninputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
