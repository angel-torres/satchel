import { TestBed } from '@angular/core/testing';

import { ReaderModeService } from './reader-mode.service';

describe('ReaderModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReaderModeService = TestBed.get(ReaderModeService);
    expect(service).toBeTruthy();
  });
});
