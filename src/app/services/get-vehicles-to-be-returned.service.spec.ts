import { TestBed } from '@angular/core/testing';

import { GetVehiclesToBeReturnedService } from './get-vehicles-to-be-returned.service';

describe('GetVehiclesToBeReturnedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetVehiclesToBeReturnedService = TestBed.get(GetVehiclesToBeReturnedService);
    expect(service).toBeTruthy();
  });
});
