import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  public timeApiURL = 'http://api.geonames.org/timezoneJSON?formatted=true&';
  public userdetails = '&username=kalyan11021980&style=full';
  public notificationURL = 'http://localhost:3000/api/subscribe';
  public token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTIxYTZjNjM5OWRkMTJlNmM2ZDNmYTAiLCJpYXQiOjE1NzkyNjM2ODYsImV4cCI6MTU3OTM0OTY4Nn0.jPO-8ykxLI-LyaY-FgSyXej2sEzP5GrZ5VP_RPGsFeY"
  // lat=22.57&lng=88.35
  public appID = '&appid=dc9b03f27b6d1b3ef9e1e36680b989ed';
  constructor(
    private _http: HttpClient
  ) {

  }

  getWeather(city, unit): Observable<any> {
    return this._http.get<any>(this.apiURL + city + this.appID + '&units=' + unit).pipe(catchError(this.handlError));
  }
  getLocalTime(lat, long): Observable<any> {
    return this._http.get<any>(this.timeApiURL + 'lat=' + lat + '&lng=' + long + this.userdetails).pipe(catchError(this.handlError));
  }
  postSubscription(sub: PushSubscription) {
    console.log("post");
    const headers = new HttpHeaders()
      .set("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTIxYTZjNjM5OWRkMTJlNmM2ZDNmYTAiLCJpYXQiOjE1NzkyNjM2ODYsImV4cCI6MTU3OTM0OTY4Nn0.jPO-8ykxLI-LyaY-FgSyXej2sEzP5GrZ5VP_RPGsFeY`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('X-Requested-With', 'XMLHttpRequest')

    return this._http.post(this.notificationURL, sub, { headers: headers}).pipe(catchError(this.handlError));
  }

  handlError(error) {
    return throwError(error.error.message);
  }
}
