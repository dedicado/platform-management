import { Routes } from '@angular/router'
import { controlRoutes } from './control.routes'
import { ControlLayoutComponent } from '../layouts/control-layout/control-layout.component'
import { ErrorLayoutComponent } from '../layouts/error-layout/error-layout.component'
import { errorRoutes } from './error.routes'
import { authGuard } from '../core/guards/auth.guard'
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component'
import { MasterLayoutComponent } from '../layouts/master-layout/master-layout.component'
import { masterRoutes } from './master.routes'

export const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@/app/components/forms/auth-form/auth-form.component').then(
            (load) => load.AuthFormComponent,
          ),
      },
    ],
  },
  {
    path: 'erro',
    component: ErrorLayoutComponent,
    children: errorRoutes,
  },
  {
    path: 'master',
    component: MasterLayoutComponent,
    canActivate: [authGuard],
    children: masterRoutes,
  },
  {
    path: '',
    component: ControlLayoutComponent,
    canActivate: [authGuard],
    children: controlRoutes,
  },
  { path: '**', redirectTo: 'erro/404', pathMatch: 'full' },
]
