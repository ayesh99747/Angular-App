import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookedCarsTableComponent } from './all-booked-cars-table.component';

describe('AllBookedCarsTableComponent', () => {
  let component: AllBookedCarsTableComponent;
  let fixture: ComponentFixture<AllBookedCarsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBookedCarsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookedCarsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
