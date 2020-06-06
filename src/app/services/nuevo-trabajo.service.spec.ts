import { TestBed } from '@angular/core/testing';

import { NuevoTrabajoService } from './nuevo-trabajo.service';

describe('NuevoTrabajoService', () => {
  let service: NuevoTrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoTrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
