import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBookedVehiclesAdminComponent } from './view-all-booked-vehicles-admin.component';

describe('ViewAllBookedVehiclesAdminComponent', () => {
  let component: ViewAllBookedVehiclesAdminComponent;
  let fixture: ComponentFixture<ViewAllBookedVehiclesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllBookedVehiclesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBookedVehiclesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
