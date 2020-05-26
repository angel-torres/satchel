import { ReaderModeService } from '../reader-mode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readerMode = ""

  constructor(private readerModeService: ReaderModeService) { }

  ngOnInit() {
    this.readerMode = this.readerModeService.getMode()
  }

}
