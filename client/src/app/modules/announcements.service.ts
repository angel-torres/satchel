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
    },{
      title: "Grades Are Up",
      date: "May 10, 2020",
      body: "You can now view your grades in your stats page. Email front desk if there are any issues."
    }, {
      title: "Virtual Job Fair This Week",
      date: "May 5, 2020",
      body: "Virtual job fair will be happening this week! You need to make sure you RSVP for it. Contact the careers department to get registered."
    }]
  }
}
