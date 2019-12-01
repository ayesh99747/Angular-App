import { TestBed } from '@angular/core/testing';

import { GetAllVehiclesService } from './get-all-vehicles.service';

describe('GetAllVehiclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllVehiclesService = TestBed.get(GetAllVehiclesService);
    expect(service).toBeTruthy();
  });
});
