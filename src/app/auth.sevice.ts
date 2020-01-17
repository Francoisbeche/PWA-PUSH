import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public notloginUrl = 'http://localhost:3000/api/user';
    public token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTIxYTZjNjM5OWRkMTJlNmM2ZDNmYTAiLCJpYXQiOjE1NzkyNjM2ODYsImV4cCI6MTU3OTM0OTY4Nn0.jPO-8ykxLI-LyaY-FgSyXej2sEzP5GrZ5VP_RPGsFeY'
    constructor(
        private _http: HttpClient
    ) {

    }

    handlError(error) {
        return throwError(error.error.message);
    }
}
