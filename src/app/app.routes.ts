import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () =>
      import('@/app/pages/accounts-page/accounts-page.routes').then(
        (load) => load.ACCOUNTS_PAGE_ROUTES,
      ),
  },
]
