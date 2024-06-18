import { Injectable } from '@angular/core'
import { Contact } from '../interfaces/contact.interface'

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}

  contactFormMessage(data: Contact) {
    return `
    <div>
    <p><i>${data.message}</i></p>
    <p><b>${data.name}</b></p>
    <br />${data.email}<br />${data.phone}
    </div>
    `
  }
}
