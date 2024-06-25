import { Routes } from '@angular/router'

export const USERS_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@/app/pages/users-page/users-page.component').then(
        (load) => load.UsersPageComponent,
      ),
  },
]
