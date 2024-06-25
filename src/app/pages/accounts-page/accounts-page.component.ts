import { accountsActions } from '@/app/core/store/accounts/accounts-actions'
import { accountsListSelector } from '@/app/core/store/accounts/accounts-selectors'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-accounts-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts-page.component.html',
  styleUrl: './accounts-page.component.css',
})
export class AccountsPageComponent implements OnInit {
  constructor(private store: Store) {}

  accounts$ = this.store.select(accountsListSelector)

  ngOnInit(): void {
    this.store.dispatch(accountsActions.findAll())
  }
}
