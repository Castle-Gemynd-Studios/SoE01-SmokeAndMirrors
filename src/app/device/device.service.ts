import { Injectable } from '@angular/core';

@Injectable()
export abstract class DeviceService {

  public abstract get os(): string;

  public abstract get isMobile(): boolean;
  public abstract get isDesktop(): boolean;
  public abstract get isPhone(): boolean;
  public abstract get isTablet(): boolean;
  public abstract get isIOS(): boolean;
  public abstract get isAndroid(): boolean;
  public abstract get isWindows(): boolean;
  public abstract get isMacOS(): boolean;
  public abstract get isLinux(): boolean;

  constructor() { }

}
