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
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private readonly authService: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      phone: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.getRawValue())
    } else {
      return this.loginForm.markAllAsTouched()
    }
  }
}
