import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbikeTableComponent } from './motorbike-table.component';

describe('MotorbikeTableComponent', () => {
  let component: MotorbikeTableComponent;
  let fixture: ComponentFixture<MotorbikeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorbikeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorbikeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
