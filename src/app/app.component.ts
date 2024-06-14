import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AuthFormComponent } from './components/forms/auth-form/auth-form.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthFormComponent,
    FooterComponent,
  ],
  template: `
    <div class="w-full h-full relative mx-auto">
      <div class="w-full h-full min-h-svh relative">
        <router-outlet />
      </div>
      <app-footer />
    </div>
  `,
})
export class AppComponent {
  title = 'platform-management'
}
