import { authGuard } from '@/app/services/guards/auth.guard'
import { Routes } from '@angular/router'

export const MAIN_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main-page.component').then((load) => load.MainPageComponent),

    children: [
      {
        path: 'accounts',
        loadChildren: () =>
          import('@/app/pages/accounts-page/accounts-page.routes').then(
            (load) => load.ACCOUNTS_PAGE_ROUTES,
          ),
        canActivate: [authGuard],
      },
      {
        path: 'contato',
        loadComponent: () =>
          import('@/app/pages/contact-page/contact-page.component').then(
            (load) => load.ContactPageComponent,
          ),
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
          import(
            '@/app/pages/organizations-page/organizations-page.routes'
          ).then((load) => load.ORGANIZATIONS_PAGE_ROUTES),
        canActivate: [authGuard],
      },
      {
        path: 'termos-e-politicas',
        loadComponent: () =>
          import('@/app/pages/policy-page/policy-page.component').then(
            (load) => load.PolicyPageComponent,
          ),
      },
      {
        path: '',
        loadComponent: () =>
          import('@/app/pages/landing-page/landing-page.component').then(
            (load) => load.LandingPageComponent,
          ),
      },
    ],
  },
]
