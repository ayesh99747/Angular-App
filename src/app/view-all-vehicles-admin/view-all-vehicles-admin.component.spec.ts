import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllVehiclesAdminComponent } from './view-all-vehicles-admin.component';

describe('ViewAllVehiclesAdminComponent', () => {
  let component: ViewAllVehiclesAdminComponent;
  let fixture: ComponentFixture<ViewAllVehiclesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllVehiclesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllVehiclesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
