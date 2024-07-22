import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CreateUser, UpdateUser, User } from '../interfaces/user.interface'
import { PersistanceService } from './persistance.service'
import { RemoveData } from '../interfaces/core.interface'

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

  create(createUser: CreateUser): Observable<string> {
    return this.httpClient.post<string>(this.endpoint, createUser)
  }

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

  remove(id: string, removeData: RemoveData): Observable<string> {
    const { definitely } = removeData
    if (definitely) {
      return this.httpClient.delete<string>(this.endpoint + `/${id}`)
    } else {
      return this.httpClient.patch<string>(this.endpoint + `/${id}`, {
        active: false,
        softDeleted: true,
      })
    }
  }

  update(id: string, updateUser: UpdateUser): Observable<string> {
    return this.httpClient.patch<string>(this.endpoint + `/${id}`, updateUser)
  }
}
