import { TestBed } from '@angular/core/testing';

import { LoginCustomerService } from './login-customer.service';

describe('LoginCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginCustomerService = TestBed.get(LoginCustomerService);
    expect(service).toBeTruthy();
  });
});
