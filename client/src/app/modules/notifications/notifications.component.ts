import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/modules/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications = [];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.notifications = this.notificationsService.getNotifications()
  }

}
