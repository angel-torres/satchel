import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { StatsComponent } from './modules/stats/stats.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ArticlesComponent } from './modules/articles/articles.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children: [{
    path: '',
    component: StatsComponent
  },{
    path: 'posts',
    component: PostsComponent
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
