import { AnnouncementsService } from './../../../modules/announcements.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcements = [];

  constructor(private announcementsService: AnnouncementsService) { }

  ngOnInit() {
    this.announcements = this.announcementsService.getAnnouncements()
  }

}
