import { TestBed } from '@angular/core/testing';

import { HolaPisosService } from './hola-pisos.service';

describe('HolaPisosService', () => {
  let service: HolaPisosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolaPisosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
