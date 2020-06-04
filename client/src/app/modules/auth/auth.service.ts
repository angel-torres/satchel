import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials) {
    this.http.post('http://localhost:3500/auth/login', credentials)
    .subscribe((data) => {
      console.log("we got", data);
      this.router.navigate(['/dashboard'])
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
