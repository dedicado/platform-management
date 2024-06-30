import { Routes } from '@angular/router'

export const ARTICLES_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@/app/pages/articles-page/articles-page.component').then(
        (load) => load.ArticlesPageComponent,
      ),
  },
]
