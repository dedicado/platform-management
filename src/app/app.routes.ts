import { Routes } from '@angular/router'
import { authGuard } from './guards/auth.guard'

export const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () =>
      import('@/app/pages/accounts-page/accounts-page.routes').then(
        (load) => load.ACCOUNTS_PAGE_ROUTES,
      ),
    canActivateChild: [authGuard],
  },
  {
    path: 'members',
    loadChildren: () =>
      import('@/app/pages/members-page/members-page.routes').then(
        (load) => load.MEMBERS_PAGE_ROUTES,
      ),
    canActivateChild: [authGuard],
  },
  {
    path: 'organizations',
    loadChildren: () =>
      import('@/app/pages/organizations-page/organizations-page.routes').then(
        (load) => load.ORGANIZATIONS_PAGE_ROUTES,
      ),
    canActivateChild: [authGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    title: 'Sua Melhor Plataforma de Serviços',
    loadComponent: () =>
      import('@/app/pages/main-page/main-page.component').then(
        (load) => load.MainPageComponent,
      ),
  },
  { path: '**', redirectTo: '' },
]
