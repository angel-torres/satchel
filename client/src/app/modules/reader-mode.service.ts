import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderModeService {

  constructor() { }

  getMode() {
    const renderMode = localStorage.getItem('reader-mode')
    return renderMode
  };
}
