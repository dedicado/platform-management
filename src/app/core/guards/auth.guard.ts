import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const isAuthenticated = inject(AuthService).isAuthenticated

  if (!isAuthenticated) {
    router.navigate(['auth'])
    return false
  } else {
    return true
  }
}
