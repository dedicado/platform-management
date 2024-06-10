import { inject } from '@angular/core'
import { CanActivateFn } from '@angular/router'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const callback = inject(AuthService).callback

  if (callback !== undefined) {
    return true
  } else {
    router.navigate(['/'])
    return false
  }
}
