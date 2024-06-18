import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { AuthService } from '../auth.service'
import { catchError } from 'rxjs'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const isAuthenticated = inject(AuthService).isAuthenticated()
  const token = inject(AuthService).token

  if (isAuthenticated) {
    req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
    return next(req)
  } else {
    return next(req)
  }
}
