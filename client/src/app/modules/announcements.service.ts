import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  constructor() { }

  getAnnouncements() {
    return [{
      title: "Classes Are Cancelled",
      date: "May 19, 2020",
      body: "Due to Covid 19 classes will be cancelled until further notice. Please make sure to check your emails and text messages for any updats. For more information visit the link below."
    }]
  }
}
