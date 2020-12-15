import { TestBed } from '@angular/core/testing';

import { ProfGuardService } from './prof-guard.service';

describe('ProfGuardService', () => {
  let service: ProfGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
