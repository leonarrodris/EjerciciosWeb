import { TestBed } from '@angular/core/testing';

import { ReservaAddService } from './reserva-add.service';

describe('ReservaAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservaAddService = TestBed.get(ReservaAddService);
    expect(service).toBeTruthy();
  });
});
