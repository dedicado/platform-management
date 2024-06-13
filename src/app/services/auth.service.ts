import { Injectable } from '@angular/core'
import { AuthCallback, Authenticate } from '../interfaces/auth.interface'
import { HttpClient } from '@angular/common/http'
import { environment } from '@/environments/environment'
import { Observable, tap } from 'rxjs'
import { error } from 'console'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = environment.platformApiUrl + '/auth'

  callback!: AuthCallback

  constructor(private readonly httpClient: HttpClient) {}

  authenticate(inputs: Authenticate): Observable<AuthCallback> {
    return this.httpClient.post<AuthCallback>(this.endpoint + '/login', inputs)
  }

  codeGenerator(phone: string): Observable<unknown> {
    const data = { phone: phone }

    return this.httpClient.post<unknown>(this.endpoint + '/code', data)
  }
}
