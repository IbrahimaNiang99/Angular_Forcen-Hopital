import { TestBed } from '@angular/core/testing';

import { TypeconsultationService } from './typeconsultation.service';

describe('TypeconsultationService', () => {
  let service: TypeconsultationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeconsultationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
