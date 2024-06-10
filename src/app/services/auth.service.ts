import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  AuthCallbackInterface,
  AuthLoginInterface,
} from '../interfaces/auth.interfaces'
import { environment } from '@/environments/environment'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint: string = environment.platformApiUrl + '/auth/login'
  private AUTH_TOKEN: any

  callback!: AuthCallbackInterface | undefined

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getToken()
  }

  private getToken() {
    if (typeof localStorage !== 'undefined') {
      this.AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')

      this.callback = this.AUTH_TOKEN
    }
  }

  public login(inputs: AuthLoginInterface) {
    return this.httpClient
      .post<AuthCallbackInterface>(this.endpoint, inputs)
      .subscribe(
        (data) =>
          typeof localStorage !== 'undefined' &&
          localStorage.setItem('AUTH_TOKEN', JSON.stringify(data)),
      ).closed
  }

  public logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('AUTH_TOKEN')
      this.router.navigate(['/'])
    }
  }
}
