import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'usuarios',
    title: 'Usuarios da Plataforma',
    loadChildren: () =>
      import('@/app/pages/user-page/user-page.routes').then(
        (load) => load.USER_PAGE_ROUTERS,
      ),
  },
  {
    path: 'minha-conta',
    title: 'Minha Conta na Plataforma',
    loadChildren: () =>
      import('@/app/pages/account-page/account-page.routes').then(
        (load) => load.ACCOUNT_PAGE_ROUTES,
      ),
  },
  {
    path: 'autenticar-se',
    title: 'Autenticar-se para acessar a Melhor Plataforma de Serviços',
    loadComponent: () =>
      import('@/app/pages/auth-page/auth-page.component').then(
        (load) => load.AuthPageComponent,
      ),
  },
  {
    path: 'registrar-se',
    title: 'Registrar-se na Melhor Plataforma de Serviços',
    loadComponent: () =>
      import('@/app/pages/register-page/register-page.component').then(
        (load) => load.RegisterPageComponent,
      ),
  },
  {
    path: 'termos-e-politicas',
    title: 'Termos e Políticas de Utilização da Plataforma',
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
]
