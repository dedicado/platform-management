import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Authenticate } from '../interfaces/auth.interface'
import { MessagesService } from './messages.service'
import { Observable, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SendersService {
  endpoint: string = environment.platformApiUrl + '/senders'

  constructor(
    private readonly httpClient: HttpClient,
    private readonly messagesServide: MessagesService,
  ) {}

  sendSecretAuthCode(inputs: Authenticate): Observable<any> {
    const { code, phone } = inputs
    const data = {
      to: phone,
      message: this.messagesServide.authCodeMessage(code),
    }

    return this.httpClient.post<any>(`${this.endpoint}/sms`, data)
  }
}
