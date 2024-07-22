import { Routes } from '@angular/router'

export const USERS_PAGE_ROUTES: Routes = [
  {
    path: '',
    title: 'Usuários da Plataforma',
    loadComponent: () =>
      import('./users-page.component').then((load) => load.UsersPageComponent),
  },
]
