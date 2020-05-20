import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Calculus',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
      name: 'History',
      data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
      name: 'Psychology',
      data: [163, 203, 276, 408, 547, 729, 628]
        }, {
      name: 'Computer Science',
      data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
      name: 'Physics',
      data: [2, 2, 2, 6, 13, 30, 46]
    }]
  }

  cards() {
    return [71, 78, 36, 66]
  }

  pieChart() {
    return [{
          name: 'Calculus',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'History',
          y: 11.84
      }, {
          name: 'Psychology',
          y: 10.85
      }, {
          name: 'Computer Science',
          y: 4.67
      }, {
          name: 'Physics',
          y: 4.18
      }]
  }

  table() {
      return [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
  }
}
