import { Routes } from '@angular/router'

export const controlRoutes: Routes = [
  { path: '**', redirectTo: 'erro/404', pathMatch: 'full' },
  {
    path: 'perfil',
    loadComponent: () =>
      import('@/app/pages/control/profile-page/profile-page.component').then(
        (load) => load.ProfilePageComponent,
      ),
  },
  {
    path: ':document',
    loadComponent: () =>
      import(
        '@/app/pages/control/organization-page/organization-page.component'
      ).then((load) => load.OrganizationPageComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('@/app/pages/control/main-page/main-page.component').then(
        (load) => load.MainPageComponent,
      ),
  },
]
