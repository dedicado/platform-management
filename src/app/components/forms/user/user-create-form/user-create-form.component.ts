import { CreateUser, UsersState } from '@/app/core/interfaces/user.interface'
import { usersActions } from '@/app/core/store/users/users-actions.store'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-user-create-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-create-form.component.html',
  styleUrl: './user-create-form.component.css',
})
export class UserCreateFormComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<UsersState>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(usersActions.findMany())
  }

  createForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    role: ['customer'],
  })

  createOnSubmit() {
    if (this.createForm.valid) {
      const createUser: CreateUser = this.createForm.getRawValue()
      this.store.dispatch(usersActions.create({ createUser }))
    } else {
      this.createForm.markAllAsTouched()
    }
  }
}
