import { Injectable } from '@angular/core';

import { RendererCoreService } from '../my-electron/renderer-core.service';
import { DeviceService } from './device.service';

@Injectable()
export class ElectronDeviceService extends DeviceService {
  public get os(): string {
    return "win32";
    //throw new Error("Method not implemented.");
  }
  public get isMobile(): boolean {
    return false;
  }
  public get isDesktop(): boolean {
    return true;
  }
  public get isPhone(): boolean {
    return false;
  }
  public get isTablet(): boolean {
    return false;
  }
  public get isIOS(): boolean {
    return false;
  }
  public get isAndroid(): boolean {
    return false;
  }
  public get isWindows(): boolean {
    return true;
    //throw new Error("Method not implemented.");
  }
  public get isMacOS(): boolean {
    return false;
    //throw new Error("Method not implemented.");
  }
  public get isLinux(): boolean {
    return false;
    //throw new Error("Method not implemented.");
  }

  constructor(private _ipcRenderer: RendererCoreService) {
    super();
  }
}
