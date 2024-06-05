import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'auth',
    title: 'Autenticar-se na Plataforma',
    pathMatch: 'full',
    loadChildren: () =>
      import('@/app/pages/auth-page/auth-page.routes').then(
        (load) => load.AUTH_PAGE_ROUTES,
      ),
  },
  {
    path: 'termos-e-politicas',
    title: 'Termos e Políticas de Utilização da Plataforma',
    pathMatch: 'full',
    loadChildren: () =>
      import('@/app/pages/polices-page/polices-page.routes').then(
        (load) => load.POLICES_PAGE_ROUTES,
      ),
  },
  {
    path: '',
    title: 'Sua Melhor Plataforma de Serviços',
    loadComponent: () =>
      import('@/app/pages/landing-page/landing-page.component').then(
        (load) => load.LandingPageComponent,
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
]
