import { AuthService } from '@/app/services/auth.service'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  loginForm!: FormGroup
  recoverPasswordForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      phone: new FormControl('', [Validators.required]),
    })

    this.recoverPasswordForm = this.formBuilder.group({
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  loginOnSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.getRawValue())
    } else {
      return this.loginForm.markAllAsTouched()
    }
  }

  recoverPasswordOnSubmit(): void {
    if (this.recoverPasswordForm.valid) {
      console.log(this.recoverPasswordForm.getRawValue())
    } else {
      return this.recoverPasswordForm.markAllAsTouched()
    }
  }
}
