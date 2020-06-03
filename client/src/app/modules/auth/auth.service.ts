import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login() {
    console.log("logging in...")
    this.http.get('http://localhost:3500').subscribe((data) => {
      console.log("we got", data);
    })
  }

  signup() {
    console.log("signing up...")
  }
}
