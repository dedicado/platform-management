import { UsersState } from '@/app/core/interfaces/user.interface'
import { usersActions } from '@/app/core/store/users/users-actions.store'
import { usersSelectors } from '@/app/core/store/users/users-selectors.store'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  constructor(private readonly store: Store<UsersState>) {}

  profile$ = this.store.select(usersSelectors.findOne)

  ngOnInit(): void {
    this.store.dispatch(usersActions.findMe())
  }
}
