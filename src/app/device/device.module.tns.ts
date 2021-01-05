import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from '@nativescript/angular';

import { NSDeviceService } from '@src/app/device/nsdevice.service';
import { DeviceService } from '@src/app/device/device.service';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule
  ],
  providers: [
    { provide: DeviceService, useClass: NSDeviceService }
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DeviceModule { }
