import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { DestroyRef, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {
  CreateMembership,
  Membership,
  UpdateMembership,
} from '../interfaces/membership.interface'
import { RemoveData } from '../interfaces/core.interface'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class MembershipsService {
  constructor(
    private readonly destroyRef: DestroyRef,
    private readonly httpClient: HttpClient,
  ) {}

  private endpoint: string = environment.platformApiUrl + '/memberships'

  create(createMembership: CreateMembership): Observable<string> {
    return this.httpClient
      .post<string>(this.endpoint, createMembership)
      .pipe(takeUntilDestroyed(this.destroyRef))
  }

  findByUser(userId: string): Observable<Membership[]> {
    return this.httpClient.get<Membership[]>(this.endpoint + `/user/${userId}`)
  }

  findMany(): Observable<Membership[]> {
    return this.httpClient.get<Membership[]>(this.endpoint)
  }

  findOne(id: string): Observable<Membership> {
    return this.httpClient.get<Membership>(this.endpoint + `/${id}`)
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

  update(id: string, updateMembership: UpdateMembership): Observable<string> {
    return this.httpClient
      .patch<string>(this.endpoint + `/${id}`, updateMembership)
      .pipe(takeUntilDestroyed(this.destroyRef))
  }
}
