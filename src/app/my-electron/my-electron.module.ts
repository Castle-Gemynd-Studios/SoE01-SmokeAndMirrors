import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendererCoreService } from '@src/app/my-electron/renderer-core.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RendererCoreService
  ]
})
export class MyElectronModule { }
