import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { PersistanceService } from '../services/persistance.service'

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const token = inject(PersistanceService).getToken('AUTH_TOKEN')

  if (token) {
    router.navigateByUrl('')
    return true
  } else {
    router.navigateByUrl('auth')
    return false
  }
}
