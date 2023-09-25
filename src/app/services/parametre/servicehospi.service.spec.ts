import { TestBed } from '@angular/core/testing';

import { ServicehospiService } from './servicehospi.service';

describe('ServicehospiService', () => {
  let service: ServicehospiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicehospiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
