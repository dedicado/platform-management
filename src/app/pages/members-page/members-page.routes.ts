import { Routes } from '@angular/router'

export const MEMBERS_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@/app/pages/members-page/members-page.component').then(
        (load) => load.MembersPageComponent,
      ),
  },
]
