import { Routes } from '@angular/router'

export const masterRoutes: Routes = [
  {
    path: 'members',
    title: 'Membros de Organizações da Plataforma',
    loadComponent: () =>
      import(
        '@/app/pages/master/memberships-page/memberships-page.component'
      ).then((load) => load.MembershipsPageComponent),
  },
  {
    path: 'organizations',
    title: 'Organizações da Plataforma',
    loadComponent: () =>
      import(
        '@/app/pages/master/organizations-page/organizations-page.component'
      ).then((load) => load.OrganizationsPageComponent),
  },
  {
    path: 'subscriptions',
    title: 'Assinaturas da Plataforma',
    loadComponent: () =>
      import(
        '@/app/pages/master/subscriptions-page/subscriptions-page.component'
      ).then((load) => load.SubscriptionsPageComponent),
  },
  {
    path: 'users',
    title: 'Usuários da Plataforma',
    loadComponent: () =>
      import('@/app/pages/master/users-page/users-page.component').then(
        (load) => load.UsersPageComponent,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('@/app/pages/master/dashboard-page/dashboard-page.component').then(
        (load) => load.DashboardPageComponent,
      ),
  },
]
