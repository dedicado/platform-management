import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('@/app/pages/users-page/users-page.routes').then(
        (load) => load.USERS_PAGE_ROUTES,
      ),
  },
]
