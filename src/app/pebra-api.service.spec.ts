import { TestBed } from '@angular/core/testing';

import { PebraApiService } from './pebra-api.service';

describe('PebraApiService', () => {
  let service: PebraApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PebraApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
