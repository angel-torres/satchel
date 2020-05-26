import { ReaderModeService } from '../reader-mode.service';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  posts = [];
  readerMode = "";

  constructor(
    private postsService:  PostsService,
    private readerModeService: ReaderModeService 
    ) { }

  ngOnInit() {
    this.posts = this.postsService.posts()
    this.readerMode = this.readerModeService.getMode()
  }

}
