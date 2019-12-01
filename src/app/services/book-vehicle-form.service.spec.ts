import { TestBed } from '@angular/core/testing';

import { BookVehicleFormService } from './book-vehicle-form.service';

describe('BookVehicleFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookVehicleFormService = TestBed.get(BookVehicleFormService);
    expect(service).toBeTruthy();
  });
});
