import { Component, OnInit, Input } from '@angular/core';

interface Notification {
  title: string;
  date: string;
  body: string;
}

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})
export class NotificationCardComponent implements OnInit {
  @Input('notification') notification: Notification;
  @Input('readerMode') readerMode: string;

  constructor() { }

  ngOnInit() {
  }

}
