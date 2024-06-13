import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AuthFormComponent } from './components/forms/auth-form/auth-form.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthFormComponent],
  template: `
    <div>
      <router-outlet />
      <app-auth-form />
    </div>
  `,
})
export class AppComponent {
  title = 'platform-management'
}
