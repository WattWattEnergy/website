import { TestBed } from '@angular/core/testing';

import { AddtofireService } from './addtofire.service';

describe('AddtofireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtofireService = TestBed.get(AddtofireService);
    expect(service).toBeTruthy();
  });
});
