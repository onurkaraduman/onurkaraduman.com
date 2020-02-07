import { TestBed } from '@angular/core/testing';

import { BlogconfigService } from './blogconfig.service';

describe('BlogconfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogconfigService = TestBed.get(BlogconfigService);
    expect(service).toBeTruthy();
  });
});
