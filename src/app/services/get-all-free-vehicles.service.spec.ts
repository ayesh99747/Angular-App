import { TestBed } from '@angular/core/testing';

import { GetAllFreeVehiclesService } from './get-all-free-vehicles.service';

describe('GetAllFreeVehiclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllFreeVehiclesService = TestBed.get(GetAllFreeVehiclesService);
    expect(service).toBeTruthy();
  });
});
