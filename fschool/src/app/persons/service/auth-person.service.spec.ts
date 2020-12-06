import { TestBed } from '@angular/core/testing';

import { AuthPersonService } from './auth-person.service';

describe('AuthPersonService', () => {
  let service: AuthPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
