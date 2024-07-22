import { Injectable, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '@/environments/environment'
import { map, Observable, tap } from 'rxjs'
import { PersistanceService } from './persistance.service'
import { AuthLogin, AuthPayload } from '../interfaces/auth.interface'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint: string = environment.platformApiUrl + '/auth'

  constructor(
    private readonly httpClient: HttpClient,
    private readonly persistanceService: PersistanceService,
    private readonly router: Router,
  ) {}

  isAuthenticated = this.getToken()

  private getToken() {
    const payload = this.persistanceService.getToken('AUTH_TOKEN')
    if (!payload) return false
    return true
  }

  login(authLogin: AuthLogin) {
    return this.httpClient
      .post<AuthPayload>(this.endpoint, authLogin)
      .subscribe((payload) => {
        this.persistanceService.setToken('AUTH_TOKEN', payload)
        this.isAuthenticated = true
        this.router.navigate([''])
        return payload
      })
  }

  logout(): Observable<{}> {
    return this.persistanceService.destroyToken('AUTH_TOKEN')
  }

  validate(phone: string) {
    return this.httpClient
      .post<string>(this.endpoint + '/' + phone, {})
      .subscribe().unsubscribe
  }
}
