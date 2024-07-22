import { UsersState } from '@/app/core/interfaces/user.interface'
import { UsersService } from '@/app/core/services/users.service'
import { usersActions } from '@/app/core/store/users/users-actions.store'
import { usersSelectors } from '@/app/core/store/users/users-selectors.store'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css',
})
export class UsersPageComponent implements OnInit {
  constructor(private store: Store<UsersState>) {}
  users$ = this.store.select(usersSelectors.findMany)

  ngOnInit(): void {
    this.store.dispatch(usersActions.findMany())
  }
}
