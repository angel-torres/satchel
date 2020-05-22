import { ReaderModeService } from './../reader-mode.service';
import { AnnouncementsService } from '../announcements.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcements = [];
  readerMode: string;

  constructor(private announcementsService: AnnouncementsService, private readerModeService: ReaderModeService) { }

  ngOnInit() {
    this.announcements = this.announcementsService.getAnnouncements()
    this.readerMode = this.readerModeService.getMode()
  }

}
