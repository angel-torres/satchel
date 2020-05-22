import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderModeService {
  private readerMode: string;

  constructor() {
    this.readerMode = localStorage.getItem('reader-mode')
  }

  getMode() {
    this.readerMode = localStorage.getItem('reader-mode')
    return this.readerMode
  };

  toggleReaderMode() {
    if(this.readerMode === "light-mode") {
      localStorage.setItem("reader-mode", "dark-mode")
      this.readerMode = "dark-mode"
    } else {
      localStorage.setItem("reader-mode", "light-mode")
      this.readerMode = "light-mode"
    }

    return this.readerMode
  }
}
