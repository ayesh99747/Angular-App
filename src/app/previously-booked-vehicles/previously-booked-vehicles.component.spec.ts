import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouslyBookedVehiclesComponent } from './previously-booked-vehicles.component';

describe('PreviouslyBookedVehiclesComponent', () => {
  let component: PreviouslyBookedVehiclesComponent;
  let fixture: ComponentFixture<PreviouslyBookedVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviouslyBookedVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviouslyBookedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
