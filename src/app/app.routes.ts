import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    title: 'sua melhor plataforma de serviços',
    loadComponent: () =>
      import('@/app/app.component').then((load) => load.AppComponent),
  },
]
