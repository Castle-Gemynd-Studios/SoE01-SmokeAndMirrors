import { Component, OnInit } from '@angular/core';
import { DeviceService } from '@src/app/device/device.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'SoE01-SmokeAndMirrors';

  constructor(private _device: DeviceService) {
    
  }

  isDesktop() {
    return this._device.isDesktop === true;
  }

  getOS() {
    return `${this._device.os}`;
  }

  ngOnInit() {
    
  }
}
