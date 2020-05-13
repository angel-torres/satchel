import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  posts = [];

  constructor(private postsService:  PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.posts()
  }

}
