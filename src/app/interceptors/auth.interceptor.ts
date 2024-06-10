import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { AuthService } from '../services/auth.service'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const callback = inject(AuthService).callback

  if (callback !== undefined) {
    return next(
      req.clone({
        setHeaders: {
          Authorization: `Bearer ${callback?.token}`,
        },
      }),
    )
  }

  return next(req)
}
