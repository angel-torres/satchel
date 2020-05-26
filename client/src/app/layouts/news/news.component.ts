import { NewsService } from '../news.service';
import { Component, OnInit } from '@angular/core';
import { ReaderModeService } from '../reader-mode.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news = [];
  readerMode: string;

  constructor(private newsService: NewsService, private readerModeService: ReaderModeService) { }

  ngOnInit() {
    this.news = this.newsService.getNews()
    this.readerMode = this.readerModeService.getMode()
  }

}
