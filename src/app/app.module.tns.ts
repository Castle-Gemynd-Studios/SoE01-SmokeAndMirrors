import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
//import { BrowserModule } from '@angular/platform-browser';
import { MyHttpClientModule } from "@src/app/my-http-client/my-http-client.module";
//import { MyElectronModule } from "@src/app/my-electron/my-electron.module";
import { DeviceModule } from "@src/app/device/device.module";

import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/view/home/home.component';


// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    MyHttpClientModule,
    DeviceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
