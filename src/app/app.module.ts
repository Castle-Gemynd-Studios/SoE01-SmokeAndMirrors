import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { MyHttpClientModule } from "@src/app/my-http-client/my-http-client.module";
import { MyElectronModule } from "@src/app/my-electron/my-electron.module";
import { DeviceModule } from "@src/app/device/device.module";

import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/view/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyHttpClientModule,
    MyElectronModule,
    DeviceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
