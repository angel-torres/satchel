import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews() {
    return [{
      title: "Football To Team Wins The Championship",
      date: "May 25, 2020",
      body: "The football team has been staying at work and experts say that this might be the year!"
    },{
      title: "Tuition Will Decrease for Next Year!",
      date: "May 10, 2020",
      body: "Tuition will decrease for the following fall semester. In order to qualify for this reduction you must apply online!"
    }, {
      title: "Free Concert This Weekend",
      date: "May 5, 2020",
      body: "The most famous artist of the year will be with us this weekend. Read more to hear about our interview with her."
    }]
  }
}
