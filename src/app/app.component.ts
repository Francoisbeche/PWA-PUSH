import { Component } from '@angular/core';

import {SwPush, SwUpdate} from "@angular/service-worker";
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  readonly VAPID_PUBLIC_KEY = 'BPHZPfD6ibAOEJKIUAhVBuCm7CXisWr0i_pv25fENuJFVmHUNRWY4vSMqdKeLtNltFyuKm-_w1qpL-xOif79u4Y';
  constructor(
    public _ws: WeatherService,
    private swUpdate: SwUpdate,
    private swPush: SwPush
  ) { }


  subscribeToNotifications() {
    if (this.swPush.isEnabled) {
      console.log("enabled");
      this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(sub => {
        console.log(sub)
       this._ws.postSubscription(sub).subscribe();
      })
      .catch(console.error);
    }else{
      console.log("swPush  broken");
    }
  }


}
