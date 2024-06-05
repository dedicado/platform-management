import {
  ApplicationConfig,
  Injectable,
  provideZoneChangeDetection,
} from '@angular/core'
import {
  provideRouter,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration, Title } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http'
import { appInterceptor } from './app.interceptor'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super()
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState)
    if (title !== undefined) {
      this.title.setTitle(
        `${
          title.toLowerCase() ?? 'sua melhor plataforma de serviços'
        } | dedicado`,
      )
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    provideClientHydration(),
    provideAnimations(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch(), withInterceptors([appInterceptor])),
  ],
}
