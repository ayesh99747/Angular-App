import { TestBed } from '@angular/core/testing';

import { AddManagerService } from './add-manager.service';

describe('AddManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddManagerService = TestBed.get(AddManagerService);
    expect(service).toBeTruthy();
  });
});
