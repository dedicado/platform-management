import { environment } from '@/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Member } from '../interfaces/member.interface'

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  endpoint = environment.platformApiUrl + '/members'

  constructor(private readonly http: HttpClient) {}

  create(data: Member) {
    return this.http.post<Member>(`${this.endpoint}`, data)
  }

  findAll() {
    return this.http.get<Member[]>(`${this.endpoint}`)
  }

  findOne(id: string) {
    return this.http.get<Member>(`${this.endpoint}/${id}`)
  }

  update(id: string, data: Member) {
    return this.http.patch<Member>(`${this.endpoint}/${id}`, data)
  }

  remove(id: string) {
    return this.http.delete<string>(`${this.endpoint}/${id}`)
  }
}
