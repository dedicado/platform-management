import { HttpClient } from '@angular/common/http'
import { Injectable, signal } from '@angular/core'
import { Router } from '@angular/router'
import {
  AuthPayloadInterface,
  LoginInterface,
  RecoverPasswordInterface,
} from '../interfaces/auth.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router,
  ) {}

  payload = signal<AuthPayloadInterface | undefined | null>(undefined)

  isAuthenticated(): boolean {
    if (this.payload()) {
      return true
    } else {
      return false
    }
  }

  login({ inputs }: { inputs: LoginInterface }) {}

  logout(): void {
    localStorage.removeItem('AUTH_TOKEN')
    this.payload.set(null)
    this.router.navigateByUrl('/autenticar-se')
  }

  recoverPassword({ inputs }: { inputs: RecoverPasswordInterface }) {}
}
