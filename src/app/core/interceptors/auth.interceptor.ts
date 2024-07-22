import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { PersistanceService } from '../services/persistance.service'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const payload = inject(PersistanceService).getToken('AUTH_TOKEN')

  if (payload) {
    req.clone({
      setHeaders: {
        Authorization: `Bearer ${payload.token}`,
      },
    })
    return next(req)
  } else {
    return next(req)
  }
}
