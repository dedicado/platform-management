import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MessagesService } from './messages.service'
import { Observable, tap } from 'rxjs'
import { Contact } from '../interfaces/contact.interface'
import { SenderEmail } from '../interfaces/sender.interface'

@Injectable({
  providedIn: 'root',
})
export class SendersService {
  private endpoint: string = environment.platformApiUrl + '/senders'
  private sendEmailTo: string = environment.sendEmailTo

  constructor(
    private readonly httpClient: HttpClient,
    private readonly messagesServide: MessagesService,
  ) {}

  sendContactForm(inputs: Contact): Observable<any> {
    const data: SenderEmail = {
      to: this.sendEmailTo,
      bcc: inputs?.email,
      subject: 'Mensagem do Formulário de Contatos da Plataforma',
      message: this.messagesServide.contactFormMessage(inputs),
    }

    return this.httpClient.post<SenderEmail>(`${this.endpoint}/email`, data)
  }
}
