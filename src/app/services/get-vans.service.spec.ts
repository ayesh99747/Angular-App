import { TestBed } from '@angular/core/testing';

import { GetVansService } from './get-vans.service';

describe('GetVansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetVansService = TestBed.get(GetVansService);
    expect(service).toBeTruthy();
  });
});
