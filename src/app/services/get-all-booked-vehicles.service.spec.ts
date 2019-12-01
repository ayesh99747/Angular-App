import { TestBed } from '@angular/core/testing';

import { GetAllBookedVehiclesService } from './get-all-booked-vehicles.service';

describe('GetAllBookedVehiclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllBookedVehiclesService = TestBed.get(GetAllBookedVehiclesService);
    expect(service).toBeTruthy();
  });
});
