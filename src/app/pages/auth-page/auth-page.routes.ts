import { Routes } from '@angular/router'

export const AUTH_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth-page.component').then((load) => load.AuthPageComponent),
  },
]
