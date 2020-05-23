import { Component, OnInit, Input } from '@angular/core';

interface Contact {
  contactImg: string;
  email: string;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input('contact') contact: Contact

  constructor() { }

  ngOnInit() { }

}
