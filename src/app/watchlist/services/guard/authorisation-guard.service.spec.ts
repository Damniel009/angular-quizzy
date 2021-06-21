import { TestBed } from '@angular/core/testing';

import { AuthorisationGuardService } from './authorisation-guard.service';

describe('AuthorisationGuardService', () => {
  let service: AuthorisationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorisationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
