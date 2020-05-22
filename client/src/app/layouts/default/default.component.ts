import { ReaderModeService } from './../../modules/reader-mode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sidebarOpen = true;
  readerMode = 'light-mode';

  constructor(
    private readerModeService: ReaderModeService ) { }

  ngOnInit() {
    this.readerMode = this.readerModeService.getMode()
  }

  sidebarToggle() {
    this.sidebarOpen = !this.sidebarOpen
  }

  toggleReaderMode() {
    this.readerModeService.toggleReaderMode()
  }

}
