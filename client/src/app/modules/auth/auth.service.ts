import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials) {
    return this.http.post('http://localhost:8000/auth/login', credentials)
    // return this.http.post('https://xatchel.herokuapp.com/auth/login', credentials)
  }
  

  signup(credentials) {
    return this.http.post('http://localhost:8000/auth/signup', credentials)
    // return this.http.post('https://xatchel.herokuapp.com/auth/signup', credentials)
  }

  isLoggedIn() {
    return this.http.get('http://localhost:8000/auth/')
    // return this.http.get('https://xatchel.herokuapp.com/auth/')
  }
}
