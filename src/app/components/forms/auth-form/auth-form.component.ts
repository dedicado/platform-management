import { AuthLogin } from '@/app/core/interfaces/auth.interface'
import { AuthState } from '@/app/core/interfaces/state.interface'
import { authActions } from '@/app/core/store/actions/auth-actions'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  phone!: string

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AuthState>,
  ) {}

  validationForm = this.formBuilder.nonNullable.group({
    phone: ['', Validators.required],
  })

  authenticationForm = this.formBuilder.nonNullable.group({
    code: ['', Validators.required],
  })

  validationOnSubmit(): void {
    if (this.validationForm.valid) {
      this.phone = this.validationForm.getRawValue().phone
      this.store.dispatch(
        authActions.validation({ inputs: this.validationForm.getRawValue() }),
      )
    } else {
      this.validationForm.markAllAsTouched()
    }
  }

  authenticationOnSubmit() {
    if (this.authenticationForm.valid) {
      const inputs: AuthLogin = {
        phone: this.phone,
        code: this.authenticationForm.getRawValue().code,
      }
      this.store.dispatch(
        authActions.authentication({
          inputs: inputs,
        }),
      )
    } else {
      this.authenticationForm.markAllAsTouched()
    }
  }
}
