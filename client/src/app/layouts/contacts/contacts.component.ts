import { Component, OnInit } from '@angular/core';
import { ReaderModeService } from '../reader-mode.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts = []
  readerMode: string

  constructor(private readerModeService: ReaderModeService) { }

  ngOnInit() {
    this.readerMode = this.readerModeService.getMode()


    this.contacts = [{
      name: "Jason Hews",
      phone: "452-752-4561",
      email: "jhews@mail.com",
      contactImg: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }, {
      name: "Lorena Jacobs",
      phone: "852-782-4861",
      email: "ljacobs@mail.com",
      contactImg: "https://images.unsplash.com/photo-1521252659862-eec69941b071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }, {
      name: "Robert Towe",
      phone: "952-582-5861",
      email: "rtowe@mail.com",
      contactImg: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }, {
      name: "Geroge Martinez",
      phone: "952-782-8841",
      email: "gmartinez@mail.com",
      contactImg: "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }, {
      name: "Samuel Allison",
      phone: "652-982-8846",
      email: "sallison@mail.com",
      contactImg: "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }, {
      name: "Josephine Duran",
      phone: "752-582-8886",
      email: "jduran@mail.com",
      contactImg: "https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }, {
      name: "Martha Jackson",
      phone: "52-582-8886",
      email: "mjackson@mail.com",
      contactImg: "https://images.unsplash.com/photo-1531528329400-a5b98b2c3b83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }]
  }

}
