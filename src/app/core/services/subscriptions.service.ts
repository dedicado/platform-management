import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Subscription } from '../interfaces/subscription.interface'

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService {
  constructor(private readonly httpClient: HttpClient) {}

  endpoint: string = environment.platformApiUrl + '/subscriptions'

  findMany(): Observable<Subscription[]> {
    return this.httpClient.get<Subscription[]>(this.endpoint)
  }

  findOne(id: string): Observable<Subscription> {
    return this.httpClient.get<Subscription>(this.endpoint + `/${id}`)
  }
}
