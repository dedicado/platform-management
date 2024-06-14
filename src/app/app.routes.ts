import { Routes } from '@angular/router'
import { authGuard } from './guards/auth.guard'

export const routes: Routes = [
  {
    path: 'auth',
    pathMatch: 'full',
    title: 'Acesso ao Controle da Plataforma',
    loadComponent: () =>
      import('@/app/pages/auth-page/auth-page.component').then(
        (load) => load.AuthPageComponent,
      ),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('@/app/pages/accounts-page/accounts-page.routes').then(
        (load) => load.ACCOUNTS_PAGE_ROUTES,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'members',
    loadChildren: () =>
      import('@/app/pages/members-page/members-page.routes').then(
        (load) => load.MEMBERS_PAGE_ROUTES,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'organizations',
    loadChildren: () =>
      import('@/app/pages/organizations-page/organizations-page.routes').then(
        (load) => load.ORGANIZATIONS_PAGE_ROUTES,
      ),
    canActivate: [authGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('@/app/pages/main-page/main-page.routes').then(
        (load) => load.MAIN_PAGE_ROUTES,
      ),
    canActivate: [authGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
]
