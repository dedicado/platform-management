import { Routes } from '@angular/router'

export const CONTROL_PAGE_ROUTES: Routes = [
  {
    path: 'memberships',
    loadChildren: () =>
      import('@/app/pages/memberships-page/memberships-page.routes').then(
        (load) => load.MEMBERSHIPS_PAGE_ROUTES,
      ),
  },
  {
    path: 'organizations',
    loadChildren: () =>
      import('@/app/pages/organizations-page/organizations-page.routes').then(
        (load) => load.ORGANIZATIONS_PAGE_ROUTES,
      ),
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('@/app/pages/profile-page/profile-page.component').then(
        (load) => load.ProfilePageComponent,
      ),
  },
  {
    path: 'subscriptions',
    loadChildren: () =>
      import('@/app/pages/subscriptions-page/subscriptions-page.routes').then(
        (load) => load.SUBSCRIPTIONS_PAGE_ROUTES,
      ),
  },
  {
    path: 'users',

    loadChildren: () =>
      import('@/app/pages/users-page/users-page.routes').then(
        (load) => load.USERS_PAGE_ROUTES,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./control-page.component').then(
        (load) => load.ControlPageComponent,
      ),
    canActivate: [],
  },
]
