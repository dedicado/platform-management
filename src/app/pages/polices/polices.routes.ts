import { Routes } from '@angular/router'

export const POLICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./polices.component').then((load) => load.PolicesComponent),
  },
]
