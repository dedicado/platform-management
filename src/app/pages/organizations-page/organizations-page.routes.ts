import { Routes } from '@angular/router'

export const ORGANIZATIONS_PAGE_ROUTES: Routes = [
  {
    path: '',
    title: 'Organizações da Plataforma',
    loadComponent: () =>
      import('./organizations-page.component').then(
        (load) => load.OrganizationsPageComponent,
      ),
  },
]
