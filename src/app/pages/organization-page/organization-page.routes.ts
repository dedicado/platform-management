import { Routes } from '@angular/router'

export const ORGANIZATION_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./organization-page.component').then(
        (load) => load.OrganizationPageComponent,
      ),
  },
]
