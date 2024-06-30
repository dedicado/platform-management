import { membersActions } from '@/app/core/store/actions/members-actions'
import { membersSelectors } from '@/app/core/store/selectors/members-selectors'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-members-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members-page.component.html',
  styleUrl: './members-page.component.css',
})
export class MembersPageComponent implements OnInit {
  constructor(private store: Store) {}

  members$ = this.store.select(membersSelectors.findAll)

  ngOnInit(): void {
    this.store.dispatch(membersActions.findAll())
  }
}
