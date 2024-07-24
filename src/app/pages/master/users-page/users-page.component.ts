import { UserCreateFormComponent } from '@/app/components/forms/user/user-create-form/user-create-form.component'
import { UsersState } from '@/app/core/interfaces/user.interface'
import { UsersService } from '@/app/core/services/users.service'
import { usersActions } from '@/app/core/store/users/users-actions.store'
import { usersSelectors } from '@/app/core/store/users/users-selectors.store'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatTableModule } from '@angular/material/table'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule, MatTableModule, UserCreateFormComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent implements OnInit {
  constructor(
    private readonly matDialog: MatDialog,
    private readonly store: Store<UsersState>,
  ) {}
  users$ = this.store.select(usersSelectors.findMany)

  displayedColumns: string[] = ['name', 'phone', 'email']
  dataSource = this.users$

  ngOnInit(): void {
    this.store.dispatch(usersActions.findMany())
  }

  openUserCreateDialog() {
    this.matDialog.open(UserCreateFormComponent)
  }
}
