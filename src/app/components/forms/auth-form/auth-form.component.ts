import { AuthLogin } from '@/app/core/interfaces/auth.interface'
import { AuthService } from '@/app/core/services/auth.service'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent implements OnInit {
  phone!: string
  isAuthenticated!: boolean

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated
    if (this.isAuthenticated) this.router.navigate([''])
  }

  validateForm = this.formBuilder.nonNullable.group({
    phone: ['', Validators.required],
  })

  loginForm = this.formBuilder.nonNullable.group({
    code: ['', Validators.required],
  })

  validateOnSubmit() {
    if (this.validateForm.valid) {
      this.phone = this.validateForm.getRawValue().phone
      this.authService.validate(this.phone)
    } else {
      this.validateForm.markAllAsTouched()
    }
  }

  loginOnSubmit() {
    if (this.loginForm.valid) {
      const authLogin: AuthLogin = {
        phone: this.phone,
        code: this.loginForm.getRawValue().code,
      }
      this.authService.login(authLogin)
    } else {
      this.loginForm.markAllAsTouched()
    }
  }

  resetPhone() {
    this.phone = ''
    this.validateForm.reset()
  }
}
