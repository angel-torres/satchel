import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  posts() {
    return [
      {
        author: "Lous Clarke",
        authorImgUrl: "https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        title: "How To Get More Users",
        articleImgUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        intro: "Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
      }
    ]
  }
}
