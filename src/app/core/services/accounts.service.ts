import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Account } from '../interfaces/account.interface'
import { environment } from '@/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  endpoint = environment.platformApi

  constructor(private readonly http: HttpClient) {}

  create(data: Account) {
    return this.http.post<string>(`${this.endpoint}/accounts`, data)
  }

  findAll() {
    return this.http.get<Account[]>(`${this.endpoint}/accounts`)
  }

  findOne(id: string) {
    return this.http.get<Account>(`${this.endpoint}/accounts/${id}`)
  }

  remove(id: string) {
    return this.http.delete<string>(`${this.endpoint}/accounts/${id}`)
  }
}
