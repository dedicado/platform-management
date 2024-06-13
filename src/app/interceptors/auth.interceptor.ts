import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { AuthService } from '../services/auth.service'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token
  console.log(token)

  req.clone({
    setHeaders: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  })

  return next(req)
}
