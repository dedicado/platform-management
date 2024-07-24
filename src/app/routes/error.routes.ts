import { Routes } from '@angular/router'

export const errorRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '404',
  },
  {
    path: '401',
    pathMatch: 'prefix',
    loadComponent: () =>
      import(
        '@/app/components/errors/unauthorized/unauthorized.component'
      ).then((load) => load.UnauthorizedComponent),
  },
  {
    path: '404',
    pathMatch: 'prefix',
    loadComponent: () =>
      import('@/app/components/errors/not-found/not-found.component').then(
        (load) => load.NotFoundComponent,
      ),
  },
]
