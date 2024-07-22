import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from '../interfaces/user.interface'
import { PersistanceService } from './persistance.service'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly persistanceService: PersistanceService,
  ) {}
  private payload = this.persistanceService.getToken('AUTH_TOKEN')

  endpoint: string = environment.platformApiUrl + '/users'

  findMany(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint)
  }

  findMe(): Observable<User> {
    const id = this.payload?.id
    return this.httpClient.get<User>(this.endpoint + `/${id}`)
  }

  findOne(id: string): Observable<User> {
    return this.httpClient.get<User>(this.endpoint + `/${id}`)
  }
}
