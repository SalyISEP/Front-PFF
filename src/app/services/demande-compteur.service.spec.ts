import { TestBed } from '@angular/core/testing';

import { DemandeCompteurService } from './demande-compteur.service';

describe('DemandeCompteurService', () => {
  let service: DemandeCompteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeCompteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
