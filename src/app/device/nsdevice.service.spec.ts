import { TestBed } from '@angular/core/testing';

import { NSDeviceService } from './nsdevice.service';

describe('NSDeviceService', () => {
  let service: NSDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NSDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
