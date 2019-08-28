import { TestBed } from '@angular/core/testing';

import { WyreService } from './wyre.service';

describe('WyreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WyreService = TestBed.get(WyreService);
    expect(service).toBeTruthy();
  });
});
