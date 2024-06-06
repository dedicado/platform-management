import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const validate = true

  if (validate) {
    return true
  } else {
    return router.navigateByUrl('/autenticar-se')
  }
}
