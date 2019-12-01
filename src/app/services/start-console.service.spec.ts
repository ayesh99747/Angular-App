import { TestBed } from '@angular/core/testing';

import { StartConsoleService } from './start-console.service';

describe('StartConsoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartConsoleService = TestBed.get(StartConsoleService);
    expect(service).toBeTruthy();
  });
});
