import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { PersistanceService } from '../services/persistance.service'
import { environment } from '@/environments/environment'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = environment.authToken
  const payload = inject(PersistanceService).getToken(authToken)

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
