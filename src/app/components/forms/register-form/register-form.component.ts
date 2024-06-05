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
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  registerForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private readonly authService: AuthService,
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.getRawValue())
    } else {
      return this.registerForm.markAllAsTouched()
    }
  }
}
