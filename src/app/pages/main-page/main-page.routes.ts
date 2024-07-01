import { Routes } from '@angular/router'

export const MAIN_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@/app/pages/main-page/main-page.component').then(
        (load) => load.MainPageComponent,
      ),
  },
]
