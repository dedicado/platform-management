import { Routes } from '@angular/router'

export const ACCOUNTS_PAGE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Contas da Plataforma',
    loadComponent: () =>
      import('./accounts-page.component').then(
        (load) => load.AccountsPageComponent,
      ),
  },
]
