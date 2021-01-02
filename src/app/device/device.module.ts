import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MyElectronModule } from '../my-electron/my-electron.module';

import { ElectronDeviceService } from './electron-device.service';
import { DeviceService } from './device.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyElectronModule
  ],
  providers: [
    { provide: DeviceService, useClass: ElectronDeviceService }
  ]
})
export class DeviceModule { }
