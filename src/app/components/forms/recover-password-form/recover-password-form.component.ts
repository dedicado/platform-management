import { AuthService } from '@/services/auth.service'
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
  selector: 'app-recover-password-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recover-password-form.component.html',
  styleUrl: './recover-password-form.component.css',
})
export class RecoverPasswordFormComponent {
  recoverPasswordForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private readonly authService: AuthService,
  ) {
    this.recoverPasswordForm = this.formBuilder.group({
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubmit(): void {
    if (this.recoverPasswordForm.valid) {
      console.log(this.recoverPasswordForm.getRawValue())
    } else {
      return this.recoverPasswordForm.markAllAsTouched()
    }
  }
}
