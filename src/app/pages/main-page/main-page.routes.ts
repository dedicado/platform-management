import { Routes } from '@angular/router'

export const MAIN_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main-page.component').then((load) => load.MainPageComponent),
  },
]
