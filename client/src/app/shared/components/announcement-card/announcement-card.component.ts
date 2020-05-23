import { Component, OnInit, Input } from '@angular/core';

interface Announcement {
  title: string;
  date: string;
  body: string;
}

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.scss']
})
export class AnnouncementCardComponent implements OnInit {
  @Input('announcement') announcement: Announcement;
  @Input('readerMode') readerMode: string;

  constructor() { }

  ngOnInit() { }

}
