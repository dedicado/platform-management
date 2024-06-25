import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '../interfaces/user.interface'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  endpoint = environment.platformApiUrl + '/users'

  constructor(private readonly http: HttpClient) {}

  create(data: User) {
    return this.http.post<User>(`${this.endpoint}`, data)
  }

  findAll() {
    return this.http.get<User[]>(`${this.endpoint}`)
  }

  findOne(id: string) {
    return this.http.get<User>(`${this.endpoint}/${id}`)
  }

  update(id: string, data: User) {
    return this.http.patch<User>(`${this.endpoint}/${id}`, data)
  }

  remove(id: string) {
    return this.http.delete<string>(`${this.endpoint}/${id}`)
  }
}
