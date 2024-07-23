import { Routes } from '@angular/router'

export const MEMBERSHIPS_PAGE_ROUTES: Routes = [
  {
    path: '',
    title: 'Membros de Organizações da Plataforma',
    loadComponent: () =>
      import('./memberships-page.component').then(
        (load) => load.MembershipsPageComponent,
      ),
  },
]
