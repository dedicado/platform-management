import { AuthState } from '@/app/core/interfaces/state.interface'
import { authActions } from '@/app/core/store/actions/auth-actions'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  phone!: string
  validatedPhone: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AuthState>,
  ) {}

  validationForm = this.formBuilder.nonNullable.group({
    phone: ['', Validators.required],
  })

  authenticationForm = this.formBuilder.nonNullable.group({
    phone: [this.phone],
    code: ['', Validators.required],
  })

  validationOnSubmit() {
    if (this.validationForm.valid) {
      console.log('validation: ', this.validationForm.getRawValue())
      this.validationForm.getRawValue().phone = this.phone
      this.store.dispatch(
        authActions.validation(this.validationForm.getRawValue()),
      )
      this.validatedPhone = true
    } else {
      this.validationForm.markAllAsTouched()
    }
  }

  authenticationOnSubmit() {
    if (this.authenticationForm.valid) {
      console.log('authentication: ', this.authenticationForm.getRawValue())
      this.store.dispatch(
        authActions.authentication({
          inputs: this.authenticationForm.getRawValue(),
        }),
      )
    } else {
      this.authenticationForm.markAllAsTouched()
    }
  }
}
