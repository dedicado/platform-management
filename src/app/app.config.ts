import {
  ApplicationConfig,
  Injectable,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core'
import {
  provideRouter,
  RouterStateSnapshot,
  TitleStrategy,
  withComponentInputBinding,
} from '@angular/router'

import { appRoutes } from './routes/app.routes'
import { provideClientHydration, Title } from '@angular/platform-browser'
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { provideEffects } from '@ngrx/effects'
import { authInterceptor } from './core/interceptors/auth.interceptor'
import { platformStore } from './core/store/platform.store'
import { UsersEffectsStore } from './core/store/users/users-effects.store'
import { SubscriptionsEffectsStore } from './core/store/subscriptions/subscriptions-effects.store'
import { OrganizationsEffectsStore } from './core/store/organizations/organizations-effects.store'
import { MembershipsEffectsStore } from './core/store/memberships/memberships-effects.store'

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super()
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState)
    if (title !== undefined) {
      this.title.setTitle(
        `${title ? title + ' :: Dedicado' : 'Plataforma Dedicado'}`,
      )
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
    provideAnimationsAsync(),
    provideStore(platformStore),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideEffects([
      MembershipsEffectsStore,
      OrganizationsEffectsStore,
      SubscriptionsEffectsStore,
      UsersEffectsStore,
    ]),
  ],
}
