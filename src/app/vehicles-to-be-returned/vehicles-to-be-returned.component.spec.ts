import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesToBeReturnedComponent } from './vehicles-to-be-returned.component';

describe('VehiclesToBeReturnedComponent', () => {
  let component: VehiclesToBeReturnedComponent;
  let fixture: ComponentFixture<VehiclesToBeReturnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesToBeReturnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesToBeReturnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
