import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router) { }
  email = "";
  password = "";
  errors = new Set();

  ngOnInit() { }

  handleLogin(event) {
    event.preventDefault()

    if(this.email.length && this.password.length) {
      const credentials = {
        "email": this.email,
        "password": this.password
      }

      this.authService.login(credentials)
      .subscribe((data) => {
        this.errors.clear()
        this.router.navigate(['/dashboard'])
      }, (error) => {
        this.errors.add(error.error)
      })
    } else {
      this.errors.add("* Please provide username and password")
    } 

  }

}
