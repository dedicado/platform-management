import { Routes } from '@angular/router'

export const MAIN_PAGE_ROUTES: Routes = [
  {
    path: '',
    title: 'Você no Controle da Melhor Plataforma de Serviços',
    loadComponent: () =>
      import('./main-page.component').then((load) => load.MainPageComponent),
  },
]
