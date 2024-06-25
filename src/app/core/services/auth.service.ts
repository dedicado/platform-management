import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '@/environments/environment'
import { Observable, tap } from 'rxjs'

type PayloadType = {
  expiredIn: number
  token: string
}

interface AuthCallback {
  readonly payload: PayloadType
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint: string = environment.platformApiUrl + '/auth'
  token!: string

  constructor(private readonly httpClient: HttpClient) {
    this.getToken()
    console.log('IS AUTHENTICATED: ', this.isAuthenticated())
  }

  private getToken(): string {
    if (typeof localStorage !== 'undefined') {
      const token: string | any = localStorage.getItem('AUTH_TOKEN')
      if (token) this.token = token
      return this.token
    }
    return this.token
  }

  codeGenerator(phone: string): Observable<unknown> {
    const data = { phone: phone }
    return this.httpClient.post<unknown>(this.endpoint + '/code', data)
  }

  isAuthenticated(): boolean {
    if (this.token) {
      const { exp }: any = JSON.parse(atob(this.token.split('.')[1]))
      if (!exp) {
        localStorage.removeItem('AUTH_TOKEN')
      } else {
        const dateTime = new Date().getTime()
        return exp < dateTime
      }
    }
    return false
  }

  login(phone: string, code: string): Observable<AuthCallback> {
    return this.httpClient
      .post<AuthCallback>(this.endpoint + '/login', { phone, code })
      .pipe(
        tap((data) => {
          if (!data.payload) return
          localStorage.setItem(
            'AUTH_TOKEN',
            btoa(JSON.stringify(data.payload.token)),
          )
        }),
      )
  }

  logout() {
    localStorage.removeItem('AUTH_TOKEN')
    this.token = ''
  }
}
