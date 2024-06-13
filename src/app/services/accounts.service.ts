import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SendersService } from './senders.service'

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  endpoint: string = environment.platformApiUrl + '/accounts'

  constructor(private readonly httpClient: HttpClient) {}
}
