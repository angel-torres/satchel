import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  getNotifications() {
    return [{
      title: "You recieved a new score!",
      date: "May 18, 2020",
      body: "A new math score was added to your grades."
    },{
      title: "Physics 208 homework is due",
      date: "May 10, 2020",
      body: "Make sure you submit your assignments by EOD."
    }, {
      title: "Your request for Office Hours has been approved!",
      date: "May 7, 2020",
      body: "Office hours will be tomorrow evening. Make sure to attend."
    }]
  }
}
