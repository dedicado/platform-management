import { DestroyRef, Injectable, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '@/environments/environment'
import { PersistanceService } from './persistance.service'
import { AuthLogin, AuthPayload } from '../interfaces/auth.interface'
import { Router } from '@angular/router'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint: string = environment.platformApiUrl + '/auth'
  private authToken: string = environment.authToken

  constructor(
    private readonly destroyRef: DestroyRef,
    private readonly httpClient: HttpClient,
    private readonly persistanceService: PersistanceService,
    private readonly router: Router,
  ) {}

  isAuthenticated = this.getToken()

  private getToken() {
    const payload = this.persistanceService.getToken(this.authToken)
    if (!payload) return false
    return true
  }

  login(authLogin: AuthLogin) {
    return this.httpClient
      .post<AuthPayload>(this.endpoint, authLogin)
      .subscribe((payload) => {
        this.persistanceService.setToken(this.authToken, payload)
        this.isAuthenticated = true
        this.router.navigate([''])
        return payload
      })
  }

  logout() {
    this.persistanceService.destroyToken(this.authToken)
    takeUntilDestroyed(this.destroyRef)
    this.router.navigate(['auth'])
  }

  validate(phone: string) {
    return this.httpClient
      .post<string>(this.endpoint + '/' + phone, {})
      .subscribe().unsubscribe
  }
}
