import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { DestroyRef, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {
  Subscription,
  UpdateSubscription,
} from '../interfaces/subscription.interface'
import { RemoveData } from '../interfaces/core.interface'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService {
  constructor(
    private readonly destroyRef: DestroyRef,
    private readonly httpClient: HttpClient,
  ) {}

  private endpoint: string = environment.platformApiUrl + '/subscriptions'

  findByCode(code: string): Observable<Subscription> {
    return this.httpClient.get<Subscription>(this.endpoint + `/code/${code}`)
  }

  findByOrganization(document: string): Observable<Subscription> {
    return this.httpClient.get<Subscription>(
      this.endpoint + `/organization/${document}`,
    )
  }

  findMany(): Observable<Subscription[]> {
    return this.httpClient.get<Subscription[]>(this.endpoint)
  }

  findOne(id: string): Observable<Subscription> {
    return this.httpClient.get<Subscription>(this.endpoint + `/${id}`)
  }

  remove(id: string, removeData: RemoveData): Observable<string> {
    const { definitely } = removeData
    if (definitely) {
      return this.httpClient
        .delete<string>(this.endpoint + `/${id}`)
        .pipe(takeUntilDestroyed(this.destroyRef))
    } else {
      return this.httpClient
        .patch<string>(this.endpoint + `/${id}`, {
          active: false,
          softDeleted: true,
        })
        .pipe(takeUntilDestroyed(this.destroyRef))
    }
  }

  update(
    id: string,
    updateSubscription: UpdateSubscription,
  ): Observable<string> {
    return this.httpClient
      .patch<string>(this.endpoint + `/${id}`, updateSubscription)
      .pipe(takeUntilDestroyed(this.destroyRef))
  }
}
