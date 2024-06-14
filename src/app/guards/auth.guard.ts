import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

export const authGuard: CanActivateFn = (route, state) => {
  const token = inject(AuthService).token
  const router = inject(Router)

  if (token) {
    return true
  } else {
    router.navigate(['auth'])
    return false
  }
}
