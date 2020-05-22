import { Component, OnInit, Input } from '@angular/core';
import { ReaderModeService } from 'src/app/modules/reader-mode.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input('news') news: any;
  @Input('readerMode') readerMode: string;

  constructor( private readerModeService: ReaderModeService) { }

  ngOnInit() {}

}
