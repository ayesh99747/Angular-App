import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllFreeVehiclesAdminComponent } from './view-all-free-vehicles-admin.component';

describe('ViewAllFreeVehiclesAdminComponent', () => {
  let component: ViewAllFreeVehiclesAdminComponent;
  let fixture: ComponentFixture<ViewAllFreeVehiclesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllFreeVehiclesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllFreeVehiclesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
