import { accountActions } from '@/app/core/states/accounts/account-actions.state'
import { accountListSelector } from '@/app/core/states/accounts/account-selectors.state'
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

  accounts$ = this.store.select(accountListSelector)

  ngOnInit(): void {
    this.store.dispatch(accountActions.findAll())
  }
}
