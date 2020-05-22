import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.scss']
})
export class AnnouncementCardComponent implements OnInit {
  @Input('announcement') announcement: any;
  @Input('readerMode') readerMode: string;

  constructor() { }

  ngOnInit() { }

}
