import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { StatsComponent } from './modules/stats/stats.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
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
