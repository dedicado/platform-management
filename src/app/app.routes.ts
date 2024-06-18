import { Routes } from '@angular/router'

export const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('@/app/pages/main-page/main-page.routes').then(
        (load) => load.MAIN_PAGE_ROUTES,
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
]
