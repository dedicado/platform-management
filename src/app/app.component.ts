import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AuthFormComponent } from './components/forms/auth-form/auth-form.component'
import { NavComponent } from './components/nav/nav.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthFormComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
  ],
  template: `
    <div class="w-full h-full relative mx-auto">
      <app-nav />
      <div class="w-full h-full min-h-svh relative">
        <app-header />
        <router-outlet />
      </div>
      <app-footer />
    </div>
  `,
})
export class AppComponent {
  title = 'platform-management'
}
