import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { GradesComponent } from 'src/app/modules/grades/grades.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatDividerModule, MatCardModule } from '@angular/material';
import { ArticlesComponent } from 'src/app/modules/articles/articles.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { HomeComponent } from 'src/app/modules/home/home.component';

@NgModule({
  declarations: [
    DefaultComponent,
    GradesComponent,
    ArticlesComponent,
    HomeComponent
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
