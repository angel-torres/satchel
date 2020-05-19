import { NewsService } from './../../../modules/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.getNews()
  }

}
