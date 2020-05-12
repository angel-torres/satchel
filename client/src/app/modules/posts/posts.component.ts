import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  data = [];
  constructor(private postsService:  PostsService) { }

  ngOnInit() {
    this.data = this.postsService.posts()
  }

}
