import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
  email: string;
  password: string;

  ngOnInit() { }

  handleLogin(event) {
    event.preventDefault()
      // "email": "robtoweee@mail.com",
      // "password": "robmeifyoucanloser1999"
    const credentials = {
      "email": this.email,
      "password": this.password
    }

    this.authService.login(credentials)
  }

}
