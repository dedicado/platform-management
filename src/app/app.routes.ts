import { Routes } from '@angular/router'
import { authGuard } from './guards/auth.guard'

export const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () =>
      import('@/app/pages/accounts-page/accounts-page.routes').then(
        (load) => load.ACCOUNTS_PAGE_ROUTES,
      ), canActivate: [authGuard]
  },
]
