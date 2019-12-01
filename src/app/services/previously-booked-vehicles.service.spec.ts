import { TestBed } from '@angular/core/testing';

import { PreviouslyBookedVehiclesService } from './previously-booked-vehicles.service';

describe('PreviouslyBookedVehiclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreviouslyBookedVehiclesService = TestBed.get(PreviouslyBookedVehiclesService);
    expect(service).toBeTruthy();
  });
});
