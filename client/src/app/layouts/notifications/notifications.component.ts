import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/layouts/notifications.service';
import { ReaderModeService } from '../reader-mode.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications = [];
  readerMode: string;

  constructor(private notificationsService: NotificationsService, private readerModeService: ReaderModeService) { }

  ngOnInit() {
    this.notifications = this.notificationsService.getNotifications()
    this.readerMode = this.readerModeService.getMode()
  }

}
