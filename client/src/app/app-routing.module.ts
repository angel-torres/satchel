import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { StatsComponent } from './modules/stats/stats.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { HomeComponent } from './modules/home/home.component';
import { AnnouncementsComponent } from './shared/components/announcements/announcements.component';
import { NewsComponent } from './shared/components/news/news.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent,
    children: [{
      path: '',
      component: AnnouncementsComponent
    },{
      path: 'notifications',
      component: NotificationsComponent
    },{
      path: 'news',
      component: NewsComponent
    }]
  },{
    path: 'stats',
    component: StatsComponent
  },{
    path: 'articles',
    component: ArticlesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
