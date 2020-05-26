import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
