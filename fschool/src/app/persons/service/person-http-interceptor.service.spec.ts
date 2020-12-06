import { TestBed } from '@angular/core/testing';

import { PersonHttpInterceptorService } from './person-http-interceptor.service';

describe('PersonHttpInterceptorService', () => {
  let service: PersonHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
