import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    title: 'sua melhor plataforma de serviços',
    loadComponent: () =>
      import('@/app/pages/landing-page/landing-page.component').then(
        (load) => load.LandingPageComponent,
      ),
  },
]
