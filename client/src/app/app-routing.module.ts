import { NotificationsComponent } from './layouts/notifications/notifications.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './modules/default/default.component';
import { GradesComponent } from './layouts/grades/grades.component';
import { ArticlesComponent } from './layouts/articles/articles.component';
import { HomeComponent } from './layouts/home/home.component';
import { AnnouncementsComponent } from './layouts/announcements/announcements.component';
import { NewsComponent } from './layouts/news/news.component';
import { ContactsComponent } from './layouts/contacts/contacts.component';
import { TodosComponent } from './layouts/todos/todos.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { LandingComponent } from './modules/auth/landing/landing.component';
import { AuthComponent } from './modules/auth/auth.component';

const routes: Routes = [{
  path:'dashboard',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent,
    children: [{
      path: '',
      component: NewsComponent
    },{
      path: 'announcements',
      component: AnnouncementsComponent
    },{
      path: 'notifications',
      component: NotificationsComponent
    }]
  },{
    path: 'grades',
    component: GradesComponent
  },{
    path: 'articles',
    component: ArticlesComponent
  }, {
    path: 'contacts',
    component: ContactsComponent
  }, {
    path: 'todos',
    component: TodosComponent
  }]
}, {
  path: '',
  component: AuthComponent,
  children: [{
    path: '',
    component: LandingComponent
  },{
    path: 'login',
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
