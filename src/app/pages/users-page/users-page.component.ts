import { UserState } from '@/app/core/interfaces/state.interface'
import { usersActions } from '@/app/core/store/actions/users-actions'
import { usersSelectors } from '@/app/core/store/selectors/users-selectors'
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
  constructor(private store: Store<UserState>) {}

  users$ = this.store.select(usersSelectors.findAll)

  ngOnInit(): void {
    this.store.dispatch(usersActions.findAll())
  }
}
