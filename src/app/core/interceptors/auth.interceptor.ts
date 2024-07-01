import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { PersistanceService } from '../services/persistance.service'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(PersistanceService).getToken('AUTH_TOKEN')

  if (token) {
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
