import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptHttpClientModule } from '@nativescript/angular/http-client';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    NativeScriptHttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MyHttpClientModule { }
