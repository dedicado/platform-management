import { AuthFormComponent } from '@/app/components/forms/auth-form/auth-form.component'
import { AuthService } from '@/app/services/auth.service'
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
})
export class AuthPageComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
    this.isAuthenticated()
  }

  isAuthenticated() {
    if (this.authService.token !== undefined) {
      this.router.navigate(['/'])
    }
  }
}
