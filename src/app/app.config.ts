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

import { routes } from './app.routes'
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
import { usersEffects } from './core/store/effects/users-effects'
import { organizationsEffects } from './core/store/effects/organizations-effects'
import { membersEffects } from './core/store/effects/members-effects'
import { articlesEffects } from './core/store/effects/articles-effects'
import { appReducers } from './core/store/reducers/app-reducers'
import { authEffects } from './core/store/effects/auth-effects'

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super()
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState)
    if (title !== undefined) {
      this.title.setTitle(`${title} | Dedicado`)
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
    provideAnimationsAsync(),
    provideStore(appReducers),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideEffects([
      articlesEffects,
      authEffects,
      membersEffects,
      organizationsEffects,
      usersEffects,
    ]),
  ],
}
