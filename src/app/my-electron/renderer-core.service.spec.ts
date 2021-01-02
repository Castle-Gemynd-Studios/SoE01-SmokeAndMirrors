import { TestBed } from '@angular/core/testing';

import { RendererCoreService } from './renderer-core.service';

describe('RendererCoreService', () => {
  let service: RendererCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendererCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
