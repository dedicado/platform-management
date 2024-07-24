import { UsersState } from '@/app/core/interfaces/user.interface'
import { usersActions } from '@/app/core/store/users/users-actions.store'
import { usersSelectors } from '@/app/core/store/users/users-selectors.store'
import { Component, OnInit } from '@angular/core'
import { MatTableModule } from '@angular/material/table'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  constructor(private readonly store: Store<UsersState>) {}

  profile$ = this.store.select(usersSelectors.findOne)
  membership$ = this.store.select(usersSelectors.findByMembership)

  displayedColumns: string[] = ['name', 'document', 'role']
  dataSource = this.membership$

  ngOnInit(): void {
    this.store.dispatch(usersActions.findMe())
  }
}
