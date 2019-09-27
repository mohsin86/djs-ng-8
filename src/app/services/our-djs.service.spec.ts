import { TestBed } from '@angular/core/testing';

import { OurDjsService } from './our-djs.service';

describe('OurDjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OurDjsService = TestBed.get(OurDjsService);
    expect(service).toBeTruthy();
  });
});
