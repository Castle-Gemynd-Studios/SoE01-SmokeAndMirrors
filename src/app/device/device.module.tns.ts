import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from '@nativescript/angular';
import { NSDeviceService } from "@src/app/device/nsdevice.service";


@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule
  ],
  providers: [
    NSDeviceService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DeviceModule { }
