import { authGuard } from '@/app/core/guards/auth.guard'
import { Routes } from '@angular/router'

export const USERS_PAGE_ROUTES: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@/app/pages/users-page/users-page.component').then(
        (load) => load.UsersPageComponent,
      ),
  },
]
