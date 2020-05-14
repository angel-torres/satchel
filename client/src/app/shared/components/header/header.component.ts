import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarEvent: EventEmitter<any> =  new EventEmitter()
  @Output() toggleReaderModeEvent: EventEmitter<any> =  new EventEmitter()
  @Input('readerMode') readerMode: string

  constructor() { }

  ngOnInit() {}

  toggleSidebar() {
    this.toggleSidebarEvent.emit()
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300)
  } 

  toggleReaderMode() {
    this.toggleReaderModeEvent.emit()
  }


}
