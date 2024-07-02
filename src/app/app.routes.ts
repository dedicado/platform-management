import { Routes } from '@angular/router'
import { authGuard } from './core/guards/auth.guard'

export const routes: Routes = [
  {
    path: 'articles',
    title: 'Lista de Artigos da Plataforma',
    loadChildren: () =>
      import('@/app/pages/articles-page/articles-page.routes').then(
        (load) => load.ARTICLES_PAGE_ROUTES,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('@/app/pages/auth-page/auth-page.component').then(
        (load) => load.AuthPageComponent,
      ),
  },
  {
    path: 'members',
    title: 'Lista de Membros de Organizações na Plataforma',
    loadChildren: () =>
      import('@/app/pages/members-page/members-page.routes').then(
        (load) => load.MEMBERS_PAGE_ROUTES,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'organizations',
    title: 'Lista de Organizações da Plataforma',
    loadChildren: () =>
      import('@/app/pages/organizations-page/organizations-page.routes').then(
        (load) => load.ORGANIZATIONS_PAGE_ROUTES,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'users',
    title: 'Lista de Usuários da Plataforma',
    loadChildren: () =>
      import('@/app/pages/users-page/users-page.routes').then(
        (load) => load.USERS_PAGE_ROUTES,
      ),
    canActivate: [authGuard],
  },
  {
    path: '',
    loadComponent: () =>
      import('@/app/pages/main-page/main-page.component').then(
        (load) => load.MainPageComponent,
      ),
    canActivate: [authGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
]
