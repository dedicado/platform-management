import { Injectable } from '@angular/core'
import { AuthCallback, Authenticate } from '../interfaces/auth.interface'
import { HttpClient } from '@angular/common/http'
import { environment } from '@/environments/environment'
import { Observable, tap } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = environment.platformApiUrl + '/auth'

  callback!: AuthCallback
  token!: string

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router,
  ) {
    this.getToken()
  }

  authenticate(inputs: Authenticate): Observable<AuthCallback> {
    return this.httpClient
      .post<AuthCallback>(this.endpoint + '/login', inputs)
      .pipe(
        tap((data) => {
          localStorage.setItem('AUTH_TOKEN', data.token)
          this.token = data.token
          this.router.navigate(['/'])
        }),
      )
  }

  codeGenerator(phone: string): Observable<unknown> {
    const data = { phone: phone }

    return this.httpClient.post<unknown>(this.endpoint + '/code', data)
  }

  getToken() {
    if (typeof localStorage !== 'undefined') {
      const token: string | any = localStorage.getItem('AUTH_TOKEN')
      if (token) this.token = token
      return this.token
    }
    return this.token
  }

  logout() {
    localStorage.removeItem('AUTH_TOKEN')
    this.router.ngOnDestroy()
    this.token = ''
    return this.router.initialNavigation()
  }
}
