import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Membership } from '../interfaces/membership.interface'

@Injectable({
  providedIn: 'root',
})
export class MembershipsService {
  constructor(private readonly httpClient: HttpClient) {}

  endpoint: string = environment.platformApiUrl + '/memberships'

  findMany(): Observable<Membership[]> {
    return this.httpClient.get<Membership[]>(this.endpoint)
  }

  findOne(id: string): Observable<Membership> {
    return this.httpClient.get<Membership>(this.endpoint + `/${id}`)
  }
}
