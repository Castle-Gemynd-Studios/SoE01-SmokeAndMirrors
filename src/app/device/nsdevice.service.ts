import { Injectable } from '@angular/core';

import { DeviceModule } from "@src/app/device/device.module";

import { DeviceService } from './device.service';

import { Device, isIOS, isAndroid } from '@nativescript/core/platform';

@Injectable({
  providedIn: DeviceModule
})
export class NSDeviceService extends DeviceService {
  public get os(): string {
    return `${Device.os}`;
  }
  public get isMobile(): boolean {
    return true;
  }
  public get isDesktop(): boolean { return false; }
  public get isPhone(): boolean {
    return Device.deviceType === "Phone";
  }
  public get isTablet(): boolean {
    return Device.deviceType === "Tablet";
  }
  public get isIOS(): boolean {
    return isIOS === true;
  }
  public get isAndroid(): boolean {
    return isAndroid === true;
  }
  public get isWindows(): boolean { return false; }
  public get isMacOS(): boolean { return false; }
  public get isLinux(): boolean { return false; }

  constructor() {
    super();
  }
}
