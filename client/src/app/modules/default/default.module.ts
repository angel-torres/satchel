import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { GradesComponent } from 'src/app/layouts/grades/grades.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatDividerModule, MatCardModule } from '@angular/material';
import { ArticlesComponent } from 'src/app/layouts/articles/articles.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from 'src/app/layouts/dashboard.service';
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { LoginComponent } from 'src/app/layouts/login/login.component';
import { SignupComponent } from '../../layouts/signup/signup.component';

@NgModule({
  declarations: [
    DefaultComponent,
    GradesComponent,
    ArticlesComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
