import { TestBed } from '@angular/core/testing';

import { RegistroEstudianteService } from './registro-estudiante.service';

describe('RegistroEstudianteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroEstudianteService = TestBed.get(RegistroEstudianteService);
    expect(service).toBeTruthy();
  });
});
