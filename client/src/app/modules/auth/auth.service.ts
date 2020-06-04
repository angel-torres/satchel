import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login() {
    this.http.post('http://localhost:3500/auth/login', {
      "firstName": "Rob",
      "lastName": "Towe",
      "email": "robtoweee@mail.com",
      "password": "robmeifyoucanloser1999"
  }).subscribe((data) => {
      console.log("we got", data);
    })
  }
  

  signup() {
  //   this.http.post('http://localhost:3500/auth/signup', {
  //     "firstName": "Rob",
  //     "lastName": "Towe",
  //     "email": "robtoweee@mail.com",
  //     "password": "robmeifyoucanloser1999"
  // }).subscribe((data) => {
  //     console.log("we got", data);
  //   })

    this.http.get('http://localhost:3500/').subscribe((data) => {
      console.log("data after get", data)
    })
  }
}
