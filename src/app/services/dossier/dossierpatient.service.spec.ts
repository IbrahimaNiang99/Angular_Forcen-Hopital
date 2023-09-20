import { TestBed } from '@angular/core/testing';

import { DossierpatientService } from './dossierpatient.service';

describe('DossierpatientService', () => {
  let service: DossierpatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossierpatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
