import { Routes } from '@angular/router'

export const SUBSCRIPTIONS_PAGE_ROUTES: Routes = [
  {
    path: '',
    title: 'Assinaturas da Plataforma',
    loadComponent: () =>
      import('./subscriptions-page.component').then(
        (load) => load.SubscriptionsPageComponent,
      ),
  },
]
