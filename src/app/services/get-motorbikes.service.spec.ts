import { TestBed } from '@angular/core/testing';

import { GetMotorbikesService } from './get-motorbikes.service';

describe('GetMotorbikesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetMotorbikesService = TestBed.get(GetMotorbikesService);
    expect(service).toBeTruthy();
  });
});
