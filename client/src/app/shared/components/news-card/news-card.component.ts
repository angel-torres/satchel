import { Component, OnInit, Input } from '@angular/core';
import { ReaderModeService } from 'src/app/layouts/reader-mode.service';

interface News {
  title: string;
  date: string;
  imageUrl: string;
  body: string;
}

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input('news') news: News;
  @Input('readerMode') readerMode: string;

  constructor( private readerModeService: ReaderModeService) { }

  ngOnInit() {}

}
