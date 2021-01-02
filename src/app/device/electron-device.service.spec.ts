import { TestBed } from '@angular/core/testing';

import { ElectronDeviceService } from './electron-device.service';

describe('ElectronDeviceService', () => {
  let service: ElectronDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
