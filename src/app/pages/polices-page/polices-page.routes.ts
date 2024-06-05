import { Routes } from '@angular/router'

export const POLICES_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./polices-page.component').then(
        (load) => load.PolicesPageComponent,
      ),
  },
]
