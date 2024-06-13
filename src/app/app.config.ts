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
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http'

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super()
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState)
    if (title !== undefined) {
      this.title.setTitle(`${title} | dedicado`)
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([])),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
}
