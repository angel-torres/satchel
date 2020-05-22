import { NotificationsComponent } from './modules/notifications/notifications.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { GradesComponent } from './modules/grades/grades.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { HomeComponent } from './modules/home/home.component';
import { AnnouncementsComponent } from './modules/announcements/announcements.component';
import { NewsComponent } from './modules/news/news.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { TodosComponent } from './modules/todos/todos.component';

const routes: Routes = [{
  path:'',
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
