import { AuthService } from '@/app/services/auth.service'
import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  phone!: string

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
  ) {}

  loginForm = this.formBuilder.nonNullable.group({
    code: ['', Validators.required],
  })

  phoneVerifyForm = this.formBuilder.nonNullable.group({
    phone: ['', Validators.required],
  })

  loginOnSubmit(): void {
    if (this.loginForm.valid) {
      const phone = this.phone
      const code = this.loginForm.getRawValue().code

      this.authService
        .authenticate({ phone: phone, code: code })
        .subscribe(() => {
          this.loginForm.reset()
        }).closed
    }
  }

  phoneVerifyOnSubmit(): void {
    if (this.phoneVerifyForm.valid) {
      const phone = this.phoneVerifyForm.getRawValue().phone

      this.authService.codeGenerator(phone).subscribe(() => {
        this.phone = phone
        this.phoneVerifyForm.reset()
      }).closed
    }
  }
}
