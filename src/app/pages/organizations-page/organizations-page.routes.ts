import { Routes } from '@angular/router'

export const ORGANIZATIONS_PAGE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import(
        '@/app/pages/organizations-page/organizations-page.component'
      ).then((load) => load.OrganizationsPageComponent),
  },
]
