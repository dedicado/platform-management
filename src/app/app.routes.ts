import { Routes } from '@angular/router'
import { authGuard } from './core/guards/auth.guard'

export const routes: Routes = [
  {
    path: 'auth',
    title: 'Acessar o Painel de Controle da Plataforma',
    loadComponent: () =>
      import('@/app/pages/auth-page/auth-page.component').then(
        (load) => load.AuthPageComponent,
      ),
  },
  {
    path: '',
    title: 'Painel de Controle da Plataforma',
    loadChildren: () =>
      import('@/app/pages/control-page/control-page.routes').then(
        (load) => load.CONTROL_PAGE_ROUTES,
      ),
    canActivate: [authGuard],
  },
  {
    path: ':document',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('@/app/pages/organization-page/organization-page.routes').then(
        (load) => load.ORGANIZATION_PAGE_ROUTES,
      ),
    canActivate: [authGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
]
