import { NavComponent } from './components/nav/nav.component'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent,
    RouterOutlet,
  ],
  template: `
    <div class="relative w-full h-full mx-auto">
      <app-nav />
      <div
        class="relative w-full h-full min-h-svh py-16 sm:py-20"
      >
        <router-outlet />
      </div>
      <app-footer />
    </div>
  `,
})
export class AppComponent {}
