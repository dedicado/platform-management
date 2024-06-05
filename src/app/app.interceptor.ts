import { HttpInterceptorFn } from '@angular/common/http'

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('AUTH_TOKEN') ?? ''

  req = req.clone({
    setHeaders: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  })

  return next(req)
}
